/* eslint-disable */

import { combineReducers } from 'redux'

let nextWordId = 0

const WRITE = 'WRITE'
const SET_VISIBLITY = 'SET_VISIBLITY'
const   WORD_SWITCH = '  WORD_SWITCH'

export const write = text => ({
    type: WRITE,
    id: nextWordId++,
    text
})

// export const setVisibilityFilter = filter => ({
//     type: SET_VISIBLITY,
//     filter
// })

export const wordSwitch = id => ({
    type:   WORD_SWITCH,
    id
})

// * reducers
export const wordReducer = (state = [], action) => {
    switch(action.type) {
       case WRITE:
         return [...state, 
                {id: action.id, text: action.text, completed: false}
                ]
        case    WORD_SWITCH:
          return state.map( word => 
            ( word.id === action.id)
            ? {...word, completed: !word.completed}
            : word
        )
        default:
          return state
    }
}

// const visibilityFilter = (state = 'SHOW_ALL', action) => {
//     switch (action.type) {
//         case SET_VISIBLITY:
//             return action.filter
//         default:
//             return state
//     }
// }

// export const todoApp = combineReducers({
//     wordReducer,
//     //visibilityFilter
// })
