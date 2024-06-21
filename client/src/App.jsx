import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import PrivetRoute from './componets/PrivetRoute'

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
      <Route path="/cart" element={<PrivetRoute><Cart/></PrivetRoute>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App
