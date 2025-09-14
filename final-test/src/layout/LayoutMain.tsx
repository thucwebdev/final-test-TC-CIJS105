import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const LayoutMain = () => {
  return (
    <>
        <h1 className='text-gray-700 font-bold text-4xl text-center'>#todo</h1>
        <div className='flex justify-between gap-4 mt-4 '>
            <NavLink className="w-1/3 text-center" to = "/all">All</NavLink>
            <NavLink className="w-1/3 text-center" to = "/active">Active</NavLink>
            <NavLink className="w-1/3 text-center" to = "/completed">Completed</NavLink>
        </div>
        <hr />
        <Outlet />
    </>
  )
}

export default LayoutMain