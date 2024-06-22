import { Route,Routes } from 'react-router-dom'
import PrivetRoute from './componets/PrivetRoute'
import About from './pages/user/About'
import Contact from './pages/user/Contact'
import Policy from './pages/user/Policy'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Cart from './pages/user/Cart'
import PageNotFound from './pages/user/PageNotFound'
import Home from './pages/user/Home'
import ForgetPassword from './pages/auth/ForgetPassword'


function App() {
 return (
    <>
    <Routes>
      <Route path="/" element={<PrivetRoute><Home/></PrivetRoute>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forget-password" element={<ForgetPassword/>} />
      <Route path="/cart" element={<PrivetRoute><Cart/></PrivetRoute>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App
