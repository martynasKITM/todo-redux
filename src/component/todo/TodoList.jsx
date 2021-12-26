import React, { useState } from 'react'
import {ListGroup} from 'reactstrap'
import TodoItem from './TodoItem';
import {connect} from 'react-redux'
import {markDone, deleteTodo} from '../../store/actions/TodoAction'

const TodoLists = (props)=>{
    const [collapse, setCollapse] = useState()
    const [isOpen, setIsOpen] = useState()
    const toggle = ()=>{
        setCollapse({collapse:!collapse})
    }

    const filterTodo = (todos, status) =>{
        switch (status) {
            case 'AKTYVIOS':
                return todos.filter(todo => todo.isComplete === false);

            case 'PABAIGTOS':
                return todos.filter(todo => todo.isComplete === true);

            default: return todos;
        }
    }

    let {todos, markDone, status, deleteTodo} = props;
    if(todos.length === 0) return <p>Nera ivestu uzduociu</p>

    let filterTodos = filterTodo(todos,status )
    return (
        <ListGroup>
            {filterTodos.map(todo =>
                <TodoItem
                    colaspstate={collapse}
                    todo={todo} key={todo.id}
                    collap={toggle}
                    mark={markDone}
                    remove={deleteTodo} />)}
        </ListGroup>
    )
}


const mapDispatchToProps = state => ({
   todos:state.todos.todos,
   status:state.todos.filter
})

export default connect(mapDispatchToProps, {markDone, deleteTodo})(TodoLists);