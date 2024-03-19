import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {
  return (
    <div className='w-full flex justify-center items-start flex-col gap-y-2'>
      {todos.map((item, index) => (<Todo key={index} index={index} task={item} todos={todos} setTodos={setTodos}/>))}
    </div>
  )
}

export default TodoList
