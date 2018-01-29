/* eslint-disable */

import { combineReducers } from 'redux'

let nextTodoId = 0

const ADD_TODO = 'ADD_TODO'
const SET_VISIBLITY = 'SET_VISIBLITY'
const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBLITY,
    filter
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

// * reducers
const todos = (state = [], action) => {
    switch(action.type) {
       case ADD_TODO:
         return [...state, 
                {id: action.id, text: action.text, completed: false}
                ]
        case TOGGLE_TODO:
          return state.map( todo => 
            ( todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
        default:
          return state
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_VISIBLITY:
            return action.filter
        default:
            return state
    }
}

export const todoApp = combineReducers({
    todos,
    visibilityFilter
})
