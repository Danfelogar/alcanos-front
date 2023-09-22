import React from 'react'
import { createRoot } from 'react-dom/client'
import './theme/global.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1 className="text-3xl text-red-500 text-center font-bold underline">Hello World</h1>
  </React.StrictMode>
)
