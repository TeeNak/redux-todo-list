import * as ReactRedux from 'react-redux'
import * as Actions from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ( {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
)

const mapDispatchToProps = {
  onTodoClick: Actions.toggleTodo
}

const VisibleTodoList = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
