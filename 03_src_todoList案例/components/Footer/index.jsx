import React, { Component } from 'react'
import propTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    static propTypes = {
        valid: propTypes.number.isRequired,
        count: propTypes.number.isRequired,
        deleteTodos: propTypes.func.isRequired
    }

    //选择全部
    checkAll = (event) => {
        this.props.checkAll(event.target.checked)
    }
    render() {
        const { valid, count, deleteTodos } = this.props
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.checkAll} checked={valid === count && count !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{valid}</span> / 全部{count}
                </span>
                <button className="btn btn-danger" onClick={deleteTodos}>清除已完成任务</button>
            </div>
        )
    }
}
