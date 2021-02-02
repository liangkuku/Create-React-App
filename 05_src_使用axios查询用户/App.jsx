import React, { Component } from 'react'
import './App.css'
import Search from './components/Search/index.js'
import List from './components/List/index.js'
export default class App extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    //为查询时应该显示暂无数据
    //查询未返回数据时应该显示loding。。。
    //返回数据显示数据
    //错误信息
    //标志是List组件使用，但是改变标志是在serch组件中改变
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} />
                <List {...this.state} />
            </div>
        )
    }
}
