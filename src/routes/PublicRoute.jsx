import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'
import Error404 from '../pages/Error404'

const PublicRoute = () => {
    return (
      <Routes>
          <Route path="/login" element={<FormLogin /> } />
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          <Route path="/register" element={<FormRegister /> } />
          <Route path="*" element={<Error404 /> } />
      </Routes>
    )
  }

export default PublicRoute