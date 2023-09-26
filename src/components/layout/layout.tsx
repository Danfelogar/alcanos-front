import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='flex min-h-screen w-full'>
      <main className='w-full flex-grow max-w-[1440px] p-4'>
        <Outlet />
      </main>
    </div>
  )
}
