import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Success from './Payment/Success'
import Payment from './Payment/Payment'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/success' element={<Success/>}/>
        <Route path='/' element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
