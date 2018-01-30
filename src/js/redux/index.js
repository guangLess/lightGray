import { combineReducers } from 'redux'

let nextWordId = 0
const WRITE = 'WRITE'
const   WORD_SWITCH = '  WORD_SWITCH'

export const write = text => ({
    type: WRITE,
    id: nextWordId++,
    text
})

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