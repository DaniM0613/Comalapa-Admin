import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {

    const [list, setList] = useState([]);
    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.success) {
          setList(response.data.data);
        }
        else {
            toast.error("Error")
        }
    }

    const removeFood = async(foodId) => {
       const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
       await fetchList();
       if(response.data.success) {
        toast.success(response.data.message)
       }
       else{
        toast.error('Error');
       }
    }

    useEffect(() => {
        fetchList();
    },[])

  return (
    <div className='w-full mx-6 mt-12  text-slate-600 text-xl max-sm:w-60 max-sm:text-xs max-sm:mt-6'>
      <p className='mb-4 font-bold text-black'>All Foods List</p>
      <div className=''>
        <div className='grid grid-cols-5 items-center text-center gap-2.5 py-3 border-2 border-solid border-gray-600 text-sm bg-slate-400 max-sm:grid-cols-3 max-sm:gap-3 max-sm:hidden'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=> {
           return(
            <div key={index} className=' grid grid-cols-5 items-center text-center gap-2.5 py-3 pl-2 border-2 border-solid border-gray-600 text-sm max-sm:text-xs '>
              <img src={`${url}/images/`+item.image} alt='' className=' w-12'/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor-pointer bg-red-600 rounded-2xl mx-20 text-white font-bold text-center p-0.5 max-sm:mr-2 max-sm:ml-0 max-lg:mx-10 max-md:mx-8'>X</p>
            </div>
           )
        })}

      </div>
    </div>
  )
}
export default List