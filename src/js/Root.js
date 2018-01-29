import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todoApp } from './redux'
import App from './components/App'

let store = createStore(todoApp)

const Hello = () => {
    return (
    <Provider store={store}>
        <App />
    </Provider>
    )
}


// const Hello = () => (
//     <div>
//       <p> hello </p> 
//     </div>
//   )

render(<Hello />, document.getElementById('root'));
//hello 🤩