import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <main style={{minHeight:"80vh"}}>
      {children}
      </main>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default Layout