import React from 'react'
import './Error404.css' 
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className='container py-5'>
    <h1 className='display-1'>ERROR 404</h1>
      <div className='fondo'>

      </div>
    <h2>LA PAGINA QUE BUSCAS NO SE ENCUENTRA DISPONIBLE</h2>

    <Link to='/' className='btn btn-outline-warning'>Volver a Inicio</Link>
    </div>
    
  )
}

export default Error404