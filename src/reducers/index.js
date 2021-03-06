import * as Redux from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = Redux.combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
