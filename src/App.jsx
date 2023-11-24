import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/index.ROUTES'
import { useState } from 'react'
import './App.css'

const router = createBrowserRouter(ROUTES)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
