import React, { Component } from 'react'
import propTypes from 'prop-types'
import Item from '../Item'
import './index.css'

//对接受的props进行类型以及必要性的限制
export default class List extends Component {
    static propTypes = {
        updateTodo: propTypes.func.isRequired
    }

    render() {
        const { todos, updateTodo, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => (
                        <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    ))
                }
            </ul>
        )
    }
}
