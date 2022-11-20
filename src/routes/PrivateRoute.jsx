import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Buscador from '../components/Buscador'
import NavBar from '../components/NavBar'
import Details from '../pages/Details'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'

const PrivateRoute = () => {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search/:query" element={<Buscador />} />
        </Routes>
      </>
    )
  }

export default PrivateRoute