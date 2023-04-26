import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ErrorPage from '../pages/ErrorPage'
import MainPage from '../pages/MainPage'
import UserDetailspage from '../pages/UserDetailspage'
import Users from '../components/users/Users'
import HelloWorld from '../pages/HelloWorld'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/hello' element={<HelloWorld/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserDetailspage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default AppRouter
