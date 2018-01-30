import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="todo-app">
   <AddTodo />
    <div> Hello ! </div>
    <VisibleTodoList />
   <Footer />
  </div>
)

// const App = () => (
//   <div>
//     <p> hello </p> 
//   </div>
// )


export default App

   //
