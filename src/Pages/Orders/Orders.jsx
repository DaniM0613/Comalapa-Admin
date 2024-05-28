import { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { assets} from '../../assets/assets'


const Orders = ({url}) => {

  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async () => {
     const response = await axios.get(url+"/api/order/list");
     if(response.data.success){
       setOrders(response.data.data)
     }
     else {
        toast.error("Error")
     }
  }

  const statusHandler = async (event,orderId) => {
      const response = await axios.post(url+"/api/order/status",{
         orderId,
         status:event.target.value
      })
      if (response.data.success) {
         await fetchAllOrders();
      }
  }


  useEffect(() => {
     fetchAllOrders();
  },[])
  
  return (
    <div className="w-full mx-6 mt-12  text-slate-600 text-xl max-sm:w-60 max-sm:text-xs max-sm:mt-6">
      <h3 className='mb-4 font-bold text-black'>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index) => (
           <div key={index} className='grid grid-cols-5 items-center gap-4 border-solid border border-orange-500 p-5 mx-8 my-0 text-xs text-slate-600 max-sm:grid-cols-3 max-sm:px-4 py-2'>
             <img src={assets.parcel_icon} alt='' className=' max-sm:w-10'/>
             <div>
              <p className='font-bold'>
                {order.items.map((item,index)=>{
                   if(index===order.items.length-1){
                     return item.name + " x " +item.quantity
                   }
                   else {
                      return item.name + " x " +item.quantity + ","
                   }
                })}
              </p>
              <p className='font-bold mt-6 mb-2'>{order.address.firstName+ " " +order.address.lastName}</p>
              <div className="mb-2.5">
                <p>{order.address.street+","}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
             </div>
             <p>Items: {order.items.length}</p>
             <p>${order.amount}</p>
             <select className='bg-white border border-solid border-orange-500 p-2 w-30 outline-none max-sm:p-2.5 max-sm:text-xs' onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
               <option value='Food Processing'>Food Processing</option>
               <option value='Out of delivery'>Out for delivery</option>
               <option value='Delivered'>Delivered</option>
             </select>
           </div>
        ))}
      </div>
      
    </div>
  )
}

export default Orders
