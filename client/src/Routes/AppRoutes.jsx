import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import UserLogin from '../pages/user/Login.jsx'
import UserRegister from '../pages/user/Register.jsx'
import UserLogout from '../pages/user/Logout.jsx' ;
import FoodPartnerLogin from '../pages/foodPartner/Login.jsx'
import FoodPartnerLogout from '../pages/foodPartner/Logout.jsx'
import FoodPartnerRegister from '../pages/foodPartner/Register.jsx'

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/logout" element={<UserLogout />} />

          <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
          <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
          <Route path="/food-partner/logout" element={<FoodPartnerLogout />} />

          {/* Default Routes */}
          <Route path="/" element={<Navigate to="/user/login" replace />} />
          <Route path="*" element={<Navigate to="/user/login" replace />} />
      </Routes>
  );
}

export default AppRoutes
