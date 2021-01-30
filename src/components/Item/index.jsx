import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {
        flag: false,//鼠标移入移出的标志
        checked: null
    }

    //鼠标移入时显示删除按钮
    handleMouse = (flag) => {
        return () => {
            this.setState({ flag })
        }
    }

    //删除单个todo
    deleteTodo = (id) => {
        const { deleteTodo } = this.props
        if (window.confirm('确定要删除吗？')) {
            deleteTodo(id)
        }
    }

    //选择单个checkBox
    handleCheck = (id) => {
        const { updateTodo } = this.props
        return (event) => {
            updateTodo(id, event.target.checked)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { flag } = this.state
        //key和ref不会被作为props传递给子组件
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: flag ? '#ddd' : 'white' }}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: flag ? "block" : "none" }} onClick={() => this.deleteTodo(id)}>删除</button>
            </li>
        )
    }
}
