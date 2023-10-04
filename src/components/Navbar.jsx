import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='shadow-lg bg-slate-200 flex items-center h-16 p-3'>
            <input type="text" placeholder='Search...' className='w-60 p-2 outline-none rounded-lg' />
        </div>
    </>
  )
}

export default Navbar