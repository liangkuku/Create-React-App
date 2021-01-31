import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import propTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
    static propTypes = {
        todos: propTypes.array.isRequired,
        getChild: propTypes.func.isRequired
    }

    //Enter添加todo
    handleKeyUp = (event) => {
        let { value } = event.target
        //event.keyCode识别按下的键盘
        if (event.keyCode !== 13) return
        if (value.trim() === '') {
            alert('输入不能为空')
            return
        }
        //props中的方法
        const { getChild } = this.props
        if (getChild) {
            //返回父组件一个todo对象
            getChild({ id: nanoid(), name: value, done: false })
        }
        //输入后清空input
        event.target.value = ''
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
