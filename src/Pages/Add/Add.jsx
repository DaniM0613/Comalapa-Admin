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
    <div className=''>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className=' flex-col'>
           <p>Upload Image</p>
           <label htmlFor='image'>
             <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
           </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
        </div>
        <div className=' flex-col'>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='type here'/>
        </div>
        <div className='flex-col'>
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Write Contect Here' required></textarea>
        </div>
        <div className=''>
            <div className='flex-col'>
                <p>Product category</p>
                <select onChange={onChangeHandler} name='category'>
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
            <div className=''>
               <p>Product price</p> 
               <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='Q.20'/>
            </div>
        </div>
         <button type='submit' className=''>ADD</button>
      </form>
      
    </div>
  )
}

export default Add
