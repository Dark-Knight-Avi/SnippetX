import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const TodoBox = () => {
    const [task, setTask] = useState('')
    const [todos, setTodos] = useState([])
    return (
        <div className='w-[90%] md:w-[75%] lg:w-1/2 min-h-[500px] bg-[#31363F] shadow-transparent flex flex-col justify-start items-center text-[#EEEEEE] py-5 px-10 gap-y-5'>
            <h1 className='text-5xl animate-pulse'>TODOS</h1>
            <AddTodo task={task} setTask={setTask} setTodos={setTodos} todos={todos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoBox
