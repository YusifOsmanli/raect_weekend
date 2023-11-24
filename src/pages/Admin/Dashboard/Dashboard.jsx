import React from 'react'
import { useOutletContext } from 'react-router'

const Dashboard = () => {
  const [data,setData]=useOutletContext()
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard