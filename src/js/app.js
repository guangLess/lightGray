console.log("hello you")

import React, {Component} from 'react'
import { render } from 'react-dom'

const Hello = () => {
    return (
    <div>
    hello 🤩
    </div>
    )
}

render(<Hello />, document.getElementById('app'));
