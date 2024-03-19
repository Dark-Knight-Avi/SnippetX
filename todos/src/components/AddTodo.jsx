import React from 'react'

const AddTodo = ({ task, setTask, setTodos, todos }) => {

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setTodos([...todos, {
                id: todos.length + 1,
                description: task
            }])
            setTask('')
        }} className='flex justify-center items-start gap-x-5 w-full'>
            <input className='flex-1 px-3 py-2 rounded-sm hover:opacity-[0.9] active:opacity-[1.2] bg-[#76ABAE] outline-none placeholder:text-[#c6d6e3]' value={task} type="text" placeholder='Enter task...'
                onChange={(e) => setTask(e.target.value)}
            />
            <button type='submit' disabled={task.length > 0 ? false : true} className='px-3 py-2 bg-[#E3651D] hover:opacity-[0.8] active:opacity-[1.2] rounded-sm'>Add</button>
        </form>
    )
}

export default AddTodo
