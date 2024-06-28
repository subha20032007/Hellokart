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
import AdminRoute from './componets/AdminRoute'
import CreateProduct from './pages/admin/CreateProduct'
import CreateCategory from './pages/admin/CreateCategory'
import Orders from './pages/user/Orders'
import Profile from './pages/user/Profile'
import Users from './pages/admin/Users'


function App() {
 return (
    <>
    <Routes>
    {/* user routes*/}
      <Route path="/" element={<Home/>} />
      <Route path="/user/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      <Route path="user/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
      <Route path="user/orders" element={<PrivateRoute><Orders/></PrivateRoute>} />
      <Route path="user/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
  {/* admin routes */}
      <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard/></AdminRoute>} />
      <Route path="/admin/create-category" element={<AdminRoute><CreateCategory/> </AdminRoute>} />
      <Route path="/admin/create-products" element={<AdminRoute><CreateProduct/></AdminRoute>} />
      <Route path="/admin/users" element={<AdminRoute><Users/></AdminRoute>} />
  {/* acess all */}
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
