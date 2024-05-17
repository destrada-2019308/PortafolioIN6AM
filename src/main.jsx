import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { Toaster } from "react-hot-toast"


export const Main = () => {
  const elementRoutes = useRoutes(routes)
  return (
    <>
      {elementRoutes}
      <Toaster position='bottom-rigth' reverseOrder={false}/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </React.StrictMode>,
)
