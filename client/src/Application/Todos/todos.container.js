import { connect } from 'react-redux'

import { fetchIfNeeded, deleteTodo, completeTodo } from './Ducks/operations'

import TodoList from './todos.component'

const mapStateToProps = state => ({
    todos: state.todos.data,
    updateCheck: state.todos.needsUpdate
})

const mapDispatchToProps = dispatch => ({
    request: () => dispatch(fetchIfNeeded()),
    deleteTodo: id => dispatch(deleteTodo(id)),
    complete: id => dispatch(completeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)