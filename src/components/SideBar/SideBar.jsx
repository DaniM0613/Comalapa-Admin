import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'


function SideBar() {
  return (
    <div className=''>
      <div className=''>
        <NavLink to='/add' className=''>
          <img src={assets.add_icon} alt=''/>
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className=''>
          <img src={assets.order_icon} alt=''/>
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className=''>
          <img src={assets.order_icon} alt=''/>
          <p>Orders</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default SideBar
