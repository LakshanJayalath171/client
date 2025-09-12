import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/student/Home'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cource-list' element={</>}/>
    </Routes>
  )
}

export default App