import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    search = () => {
        const { keyWordsNode: { value: keyWords } } = this
        const { updateAppState } = this.props
        updateAppState({ isFirst: false, isLoading: true })
        axios.get(`http://localhost:3000/search/users2?q=${keyWords}`).then(
            response => {
                console.log('请求成功', response.data)
                updateAppState({ isLoading: false, users: response.data.items })
            },
            error => {
                updateAppState({ isLoading: false, err: error.message })
                console.log('请求失败', error)
            }
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">搜索用户</h3>
                    <div>
                        <input ref={c => this.keyWordsNode = c} type="text" placeholder="输入名字后搜索" />&nbsp;<button onClick={this.search}>搜索</button>
                    </div>
                </section>
            </div>
        )
    }
}
