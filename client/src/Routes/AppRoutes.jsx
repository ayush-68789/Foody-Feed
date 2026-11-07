import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import UserLogin from '../pages/user/Login.jsx'
import UserRegister from '../pages/user/Register.jsx'
import UserLogout from '../pages/user/Logout.jsx'

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/user/register" element={ <UserRegister / > } />
          <Route path="/user/login" element={ < UserLogin />} />
          <Route path="/user/logout" element= {<UserLogout />} />
          <Route path="*" element={<Navigate />} />

          <Route path="/food-partner/register" />
          <Route path="/food-partner/login" />
          <Route path="/food-partner/logout" />
      </Routes>
  );
}

export default AppRoutes