import React from 'react';
import { Footer, Blog, Login, Header } from './containers';
import { CTA, Brand, navbar, Contact, Admin, Student } from './components';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

const App = () => {
  // below is test code used to stop navbar from rendering in the admin page
  //PS: the admin page and student pages have another navbar component created
  // const location = useLocation()
  // {location.pathname !== '/admin' && <Navbar/>}
  return (
    <div className='App'>
        <BrowserRouter>
        {/* <navbar/> navbar is temporarily commented out until i figure out how to not to render in on admin and student pages */}
        <Routes>   
            <Route path='/' element={<Header/>}/>
            <Route path='/about' element={<Brand/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cta' element={<CTA/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/student' element={<Student/>}/>

          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  )
}

export default App