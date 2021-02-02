import React, { Component } from 'react'
import './App.css'
import Search from './components/Search/index.js'
import List from './components/List/index.js'
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Search />
                <List />
            </div>
        )
    }
}
