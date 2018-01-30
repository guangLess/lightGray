import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { wordReducer } from './redux'
import App from './components/App'

let store = createStore(wordReducer)

const Hello = () => {
    return (
    <Provider store={store}>
        <App />
    </Provider>
    )
}

render(<Hello />, document.getElementById('root'))