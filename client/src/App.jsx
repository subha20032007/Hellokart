import { Route,Routes } from 'react-router-dom'

import About from './pages/user/About'
import Contact from './pages/user/Contact'
import Policy from './pages/user/Policy'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Cart from './pages/user/Cart'
import PageNotFound from './pages/user/PageNotFound'
import Home from './pages/user/Home'
import ForgetPassword from './pages/auth/ForgetPassword'
import PrivateRoute from './componets/PrivateRoute'
import AdminDashboard from './pages/admin/AdminDashboard'
import Dashboard from './pages/user/Dashboard'


function App() {
 return (
    <>
    <Routes>
    
      <Route path="/" element={<Home/>} />
      <Route path="/user-dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
  
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forget-password" element={<ForgetPassword/>} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/policy" element={<Policy/>} />
    
     
    </Routes>
    </>
  )
}

export default App
