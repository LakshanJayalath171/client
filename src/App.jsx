import React from 'react'
import { Route, Router, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourcesList from './pages/student/CourcesList'
import CourceDetails from './pages/student/CourceDetails'
import Player from './pages/student/Player'
import Loading from './pages/student/Loading'
import Dashbord from './pages/educator/Dashbord'
import Mycources from './pages/educator/Mycources'
import Addcource from './pages/educator/Addcource'
import SudentsEnrolled from './pages/educator/SudentsEnrolled'
import Educator from './pages/educator/Educator'
import Navbar from './components/students/Navbar'

const App = () => {

  const isEducatorRoute = useMatch("/educator/*")

  return (
    <div className='text-deafult min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cource-list" element={<CourcesList />} />
        <Route path="/cource-list/:input" element={<CourcesList />} />
        <Route path="/cource-list/:id" element={<CourceDetails />} />
        <Route path="/player/courceId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashbord />} />
          <Route path="my-courcess" element={<Mycources />} />
          <Route path="add-cources" element={<Addcource />} />
          <Route path="students-enrolled" element={<SudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App