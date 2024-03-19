import React from 'react'
import deleteIcon from '../assets/delete.png'

const Todo = ({ task, todos, setTodos, index }) => {
    return (
        <div className='scale-in-top flex w-full bg-[#5C5470] justify-center items-center px-1'>
            <div className="text-xl p-2">#{index + 1}</div>
            <div className="text-xl flex flex-wrap p-2 flex-1">{task.description}</div>
            <button className='p-2 bg-[#9E4784] hover:opacity-[0.8] active:opacity-[1.2] flex justify-center items-center h-full'><img className='h-5 w-5' src={deleteIcon} alt="delete" onClick={() => {
                setTodos(todos.filter((item) => item.id !== task.id))
            }}/></button>
        </div>
    )
}

export default Todo
