import { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = ({url}) => {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name:"",
        description: "",
        price: "",
        category: "Very Utz",
    })

     const onChangeHandler = (event) =>{
         const name = event.target.name;
         const value = event.target.value;
         setData(data=>({...data,[name]:value}))
     }

     const onSubmitHandler = async (event) =>{
         event.preventDefault();
         const formData = new FormData();
         formData.append('name',data.name)
         formData.append('description',data.description)
         formData.append('price',Number(data.price))
         formData.append('category',data.category)
         formData.append('image',image)
         const response = await axios.post(`${url}/api/food/add`, formData)
         if (response.data.success){
            setData({
                name:"",
                description: "",
                price: "",
                category: "Very Utz",
            })
            setImage(false)
            toast.success(response.data.message)
         } else {
            toast.error(response.data.message)
         }
     }

  return (
    <div className='w-full ml-6 mt-12 text-slate-600 text-xl max-sm:w-52 max-sm:text-xs'>
      <form className='flex flex-col gap-5' onSubmit={onSubmitHandler}>
        <div className='flex flex-col gap-2.5'>
           <p>Upload Image</p>
           <label htmlFor='image'>
             <img src={image?URL.createObjectURL(image):assets.upload_area} alt='' className=' w-32 border-2 border-orange-700 border-solid'/>
           </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
        </div>
        <div className=' w-96 flex flex-col gap-2.5 max-sm:w-52 '>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='type here' className=' p-2 border-2 border-orange-700 border-solid'/>
        </div>
        <div className=' w-96 flex flex-col gap-2.5 max-sm:w-52'>
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Write Contect Here' required className='p-2 border-2 border-orange-700 border-solid'></textarea>
        </div>
        <div className=' flex gap-7 max-sm:gap-3'>
            <div className='flex flex-col gap-2.5'>
                <p>Product category</p>
                <select onChange={onChangeHandler} name='category' className=' max-w-32 p-2 border-2 border-orange-700 border-solid'>
                    <option value='Very Utz'>Very Utz</option>
                    <option value="TZ'INAKAN">TZ'INAKAN</option>
                    <option value='Pizzería Napoli'>Pizzería Napoli</option>
                    <option value='Mundos Pizza'>Mundos Pizza</option>
                    <option value='EL CHISME'>EL CHISME</option>
                    <option value='Borgo Rotondo'>Borgo Rotondo</option>
                    <option value="LISA'S HOUSE">LISA'S HOUSE</option>
                    <option value='Tacos Tabasco'>Tacos Tabasco</option>
                    <option value="Cuate's PIZZA">Cuate's PIZZA</option>
                </select>
            </div>
            <div className='flex flex-col gap-2.5'>
               <p>Product price</p> 
               <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='Q.20' className=' max-w-32 p-2 border-2 border-orange-700 border-solid'/>
            </div>
        </div>
         <button type='submit' className='bg-black text-white p-4 w-32 max-sm:p-2'>ADD</button>
      </form>
      
    </div>
  )
}

export default Add
