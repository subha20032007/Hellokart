import React from 'react'
import Layout from '../componets/Layout'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const [auth,setAuth]=useAuth()
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>{JSON.stringify(auth)}</p>
    </Layout>
  )
}

export default Home