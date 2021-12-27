import {ListGroup} from 'reactstrap'
import TodoItem from './TodoItem';
import {connect} from 'react-redux'
import {markDone, deleteTodo} from '../../store/actions/TodoAction'
import filterTodo from "../../utilities/filterTodo";

const TodoLists = (props)=>{
    let {todos, markDone, status, deleteTodo} = props;
    if(todos.length === 0) return <p>Nera ivestu uzduociu</p>

    let filterTodos = filterTodo(todos,status )
    console.log(props)
    return (
        <ListGroup>
            {filterTodos.map(todo =>
                <TodoItem
                    todo={todo} key={todo.id}
                    mark={markDone}
                    remove={deleteTodo} />)}
        </ListGroup>
    )
}


const mapDispatchToProps = state => ({
   todos:state.todos.todos,
   status:state.todos.filter

}

)


export default connect(mapDispatchToProps, {markDone, deleteTodo})(TodoLists);