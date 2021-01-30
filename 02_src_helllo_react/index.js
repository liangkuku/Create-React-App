//引入react核心库,ES6模块化语法可以把import后面的名字作修改
import React from 'react'
//引入ReactDOM做渲染
import ReactDOM from 'react-dom'
//引入App组件
import App from './App.js'

//渲染App组件
ReactDOM.render(<App />, document.getElementById('root'))