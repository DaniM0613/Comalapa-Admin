import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'


function SideBar() {
  return (

    <div className='w-44 min-h-svh border-solid border-r-2 border-gray-400 text-xl max-sm:w-20 max-sm:min-h-60  '>
      <div className=' pt-12 pl-8 flex flex-col gap-5'>
        <NavLink to='/add' className='flex items-center gap-3 border-solid border-2 text-base  border-gray-400 border-r-0 pl-2 py-3 rounded-l cursor-pointer max-sm:pr-0 focus:bg-orange-200 focus:border-orange-700 focus:border-t-2 focus:border-solid'>
          <img src={assets.add_icon} alt=''/>
          <p className='max-sm:hidden'>Add Items</p>
        </NavLink>
        <NavLink to='/list' className='flex items-center gap-3 border-solid border-2 text-base  border-gray-400 border-r-0 pl-2 py-3 rounded-l cursor-pointer max-sm:pr-0 focus:bg-orange-200 focus:border-orange-700 focus:border-t-2 focus:border-solid'>
          <img src={assets.order_icon} alt=''/>
          <p className='max-sm:hidden'>List Items</p>
        </NavLink>
        <NavLink to='/orders' className='flex items-center gap-3 border-solid border-2 text-base border-gray-400 border-r-0 pl-2 py-3 rounded-l cursor-pointer max-sm:pr-0 focus:bg-orange-200 focus:border-orange-700 focus:border-t-2 focus:border-solid '>
          <img src={assets.order_icon} alt=''/>
          <p className='max-sm:hidden'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
