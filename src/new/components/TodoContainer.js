import React, {useState, useEffect} from "react"
import TodosList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"


const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos())

    const handleChange = id => {
        setTodos(prevState => 
            prevState.map(todo => {
                if (todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }))
 
    }
    const delTodo = id => {

        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])



        // this.setState({
        //     todos: [
        //         ...this.state.todos.filter(todo =>{
        //             return todo.id !== id
        //         })
        //     ]
        // });
    };

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }; 

        setTodos([...todos, newTodo])
    
        // this.setState({
        //     todos: [...this.state.todos, newTodo]
    };
    
    

    const editTodoItem = (id, text) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.title = text
                }
                
                return todo
            }),

        )

        
    }

    // useEffect(() => {
    //     console.log("test run")

    //     const temp = localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)

    //     if(loadedTodos){
    //         setTodos(loadedTodos)
    //     }
    // }, [setTodos])

    function getInitialTodos() {
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])


    return (
        <div className="container">
         <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList todos={todos} handleChangeProps={handleChange} delTodoProps={delTodo} editTodoProps={editTodoItem}/>
        </div>
        </div>
    )
}  

export default TodoContainer