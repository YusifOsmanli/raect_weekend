import React, { useState } from 'react'
import Header from '../../layout/Admin/Header/Header'
import Footer from '../../layout/Admin/Footer/Footer'
import { Outlet } from 'react-router'

const AdminRoot = () => {
  const [data,setData]=useState([])
  return (
    <>
      <Header  data={data}/>
      <Outlet context={[data,setData]} />
      <Footer />
    </>
  )
}

export default AdminRoot