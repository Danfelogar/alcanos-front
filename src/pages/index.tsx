import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layout/layout'

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<div>Home</div>} />
      </Route>
    </Routes>
  )
}
