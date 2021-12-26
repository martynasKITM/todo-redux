import { ADD_TODO, MARK_DONE,FILTER_TODO, REMOVE_TODO } from "./actionType";

export const addTodo = (todo) => {
    return {
        type:ADD_TODO,
        payload:todo
    }
}

export const markDone = (id) => {
    return {
        type:MARK_DONE,
        payload:id
    }
}

export const filterTodo = (activeFilter) => {
    return {
        type:FILTER_TODO,
        payload:activeFilter
    }
}

export const deleteTodo = (id) => {
    return{
        type:REMOVE_TODO,
        payload:id
    }
}