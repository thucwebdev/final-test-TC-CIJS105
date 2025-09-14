
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'
import { TodoProvider } from './Context/TodoContext'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <TodoProvider>
    <RouterProvider router = {routers}></RouterProvider>
  </TodoProvider>
  
)
