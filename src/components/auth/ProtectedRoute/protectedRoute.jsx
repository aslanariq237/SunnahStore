import React from 'react'
import reactDom from 'react-dom';
import { Route, Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
    const user = {loggedIn : !!localStorage.getItem('user_access_token')}
    return user && user.loggedIn
}

const ProtectedRoute = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet/> : <Navigate to="/" />
}

export default ProtectedRoute