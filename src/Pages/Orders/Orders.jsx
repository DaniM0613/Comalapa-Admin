import { useState, useEffect } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { assets} from '../../assets/assets'


const Orders = ({url}) => {

  const [orders,setOrders] = useState([]);

  const fetchAllOders = async () => {
     const response = await axios.get(url+"/api/order/list");
     if(response.data.success){
       setOrders(response.data.data)
       console.log(response.data.data)
     }
     else {
        toast.error("Error")
     }
  }
  useEffect(() => {
     fetchAllOders();
  },[])
  
  return (
    <div className="">
      <h3>Order Page</h3>
      <div className>
        {orders.map((order,index) => (
           <div key={index} className=''>
             <img src={assets.parcel_icon} alt=''/>
             <div>
              <p className=''>
                {order.items.map((item,index)=>{
                   if(index===order.items.length-1){
                     return item.name + " x " +item.quantity
                   }
                   else {
                      return item.name + " x " +item.quantity + ","
                   }
                })}
              </p>
              <p className=''>{order.address.firstName+ " " +order.address.lastName}</p>
              <div className=''>
                <p>{order.address.street+","}</p>
              </div>
              <p className=''>{order.address.phone}</p>
             </div>
             <p>Items: {order.items.length}</p>
             <p>${order.amount}</p>
             <select>
               <option value='Food Processing'>Food Processing</option>
               <option value='Out of delivery'>Out of delivery</option>
               <option value='Delivered'>Delivered</option>
             </select>
           </div>
        ))}
      </div>
      
    </div>
  )
}

export default Orders
