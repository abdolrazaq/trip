import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Homepage from './Pages/HomePage'
import SingUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import ContactUs from './Pages/ContactUs/ContactUs'
import Church from './Pages/Church/Church'
import KandavanVillage from './Pages/KandavanVillage/KandavanVillage'
import Valley from "./Pages/Valley/Valley"
import Poets from "./Pages/Poets/Poets"
import TourGuide from './Pages/TourGuide'
import Tourism from './Pages/Tourism'
import Blog from './Pages/Blog'
import './App.scss'


const App = () => {
  return (
    <Layout>
      <Routes>
          <Route index element={<Homepage/>} />
          <Route path='/signup' element={<SingUp/>} />
          <Route path='/tour' element={<TourGuide/>} />
          <Route path='/tourism' element={<Tourism/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/church' element={<Church/>} />
          <Route path='/kandavanvillage' element={<KandavanVillage/>} />
          <Route path='/valley' element={<Valley/>} />
          <Route path='/poets' element={<Poets/>} />
          
      </Routes>
    </Layout>
  )
}

export default App