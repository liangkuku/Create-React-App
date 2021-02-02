import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    componentDidMount() {
        PubSub.subscribe('change', (msg, data) => {
            this.setState(data)
        })
    }

    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h3>欢迎进入搜索页面</h3> :
                        isLoading ? <h3>Loading...</h3> :
                            err ? <h3 style={{ color: 'red' }}>{err}</h3> :
                                users ? users.map(user => (
                                    <div key={user.id} className="card">
                                        <a href={user.html_url} target="_blank" rel="noreferrer">
                                            <img alt="head sculpture" src={user.avatar_url} style={{ width: '100px' }} />
                                        </a>
                                        <p className="card-text">{user.login}</p>
                                    </div>
                                )) : ''
                }
            </div>
        )
    }
}
