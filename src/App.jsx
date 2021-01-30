import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
        ]
    }

    //获取header输入的todo
    getChild = (todo) => {
        //取出state现有的todos
        const { todos } = this.state
        //在todos数组开头添加todo
        todos.unshift(todo)
        //更改todos，渲染页面
        this.setState({ todos })
    }

    //更新勾选checkBox的选择
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map(todo => {
            if (todo.id === id) return { ...todo, done: done }
            else { return todo }
        })
        this.setState({ todos: newTodos })
    }

    //删除单个todo
    deleteTodo = (id) => {
        const { todos } = this.state
        const newProps = todos.filter((todo) => {
            return todo.id !== id
        })
        this.setState({ todos: newProps })
    }

    //删除所有勾选的todo
    deleteTodos = () => {
        const { todos } = this.state
        if (window.confirm('确认清除吗？')) {
            const newTodos = todos.filter(todoObj => {
                return todoObj.done === false
            })
            this.setState({ todos: newTodos })
        }
    }

    //全选checkBox
    checkAll = (done) => {
        const { todos } = this.state
        const newTodos = todos.map(todo => {
            return { ...todo, done }
        })
        this.setState({ todos: newTodos })
    }

    render() {
        let { todos } = this.state
        let count = todos.length
        let valid = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header todos={todos} getChild={this.getChild} />
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer deleteTodos={this.deleteTodos} count={count} valid={valid} checkAll={this.checkAll} />
                </div>
            </div>
        )
    }
}
