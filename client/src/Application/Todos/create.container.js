import { connect } from 'react-redux'

import CreateTodo from './create.component'

import { saveTodo } from './Ducks/operations'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    create: title => dispatch(saveTodo(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)