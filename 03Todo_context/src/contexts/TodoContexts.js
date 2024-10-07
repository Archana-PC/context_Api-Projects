import { useContext } from "react";
import { createContext } from "react";

 export const TodoContext = createContext({
    todos:[
        {      //these are properties of context that will use by any component
        id:1,
        todo:"Todo",
        completed:false
    }],
    addTodo:(todo)=>{},  // functionality of context but its defination we will define in app.js or in other file and export in app.js
    updateTodo :(id,todo)=>{},
    deleteTodo : (id)=>{},
    toggelComplete : (id)=>{},
 })


export const useTodo = ()=>{
   return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
