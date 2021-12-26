import { ADD_TODO, MARK_DONE, FILTER_TODO, REMOVE_TODO, } from "../actions/actionType";
const init = {
    todos:[{
        "title": "Testas",
        "description": "Test uzduotis ",
        "isComplete": false,
        "id": 1234677
        },
        {
        "title": "Testas 2",
        "description": "Labai gera uzduotis",
        "isComplete": true,
        "id": 12345678
        }],
    filter:'VISOS'
}
const Todos = (state=init, action) => {
    switch (action.type) {
        case ADD_TODO : {
            let todos = [...state.todos];
            todos = [action.payload, ...todos]
            return {
                ...state,
                todos
            };
        }
        case MARK_DONE : {
            let todos = [...state.todos];
            todos = todos.map(todo => {
                if(todo.id === action.payload) {
                    todo.isComplete=!todo.isComplete
                }
                return todo
            })
            return {
                ...state,
                todos
            }
        }

        case FILTER_TODO : {
            return {
                ...state,
                filter:action.payload
            }
        }

        case REMOVE_TODO : {
            const todos = removeTodo(state.todos, action.payload)
            return {
                ...state,
                todos
            }
        }

        default: return state;
    }
}

export default Todos;

function removeTodo(todos, id) {
    return todos = todos.filter(todo => todo.id !== id)
}