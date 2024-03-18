import React from 'react'

const App = () => {
  return (
    <div className='border-4 border-blue-800 h-[400px] m-10 p-10 flex flex-col justify-start gap-4 items-start rounded-xl overflow-y-scroll'>
      <div className="p-10 w-full border-4 border-red-700 shadow-lg shadow-red-500 rounded-md">
        1
      </div>
      <div className="p-10 w-1/2 border-4 border-red-700 shadow-lg shadow-red-500 rounded-md">
        2
      </div>
      <div className="p-10 w-1/3 border-4 border-red-700 shadow-lg shadow-red-500 rounded-md">
        3
      </div>
      <div className="p-10 w-1/3 border-4 border-red-700 shadow-lg shadow-red-500 rounded-md">
        4
      </div>
    </div>
  )
}

export default App
