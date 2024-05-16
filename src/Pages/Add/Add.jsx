import React from 'react'
import { assets } from '../../assets/assets'

function Add() {
  return (
    <div className=''>
      <form className='flex-col'>
        <div className=' flex-col'>
           <p>Upload Image</p>
           <label htmlFor='image'>
             <img src={assets.upload_area} alt=''/>
           </label>
            <input type='file' id='image' hidden required/>
        </div>
        <div className=' flex-col'>
            <p>Product Name</p>
            <input type='text' name='name' placeholder='type here'/>
        </div>
        <div className='flex-col'>
            <p>Product Description</p>
            <textarea name='description' rows='6' placeholder='Write Contect Here' required></textarea>
        </div>
        <div className=''>
            <div className='flex-col'>
                <p>Product category</p>
                <select name='category'>
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
               <input type='number' name='price' placeholder='Q.20'/>
            </div>
        </div>
         <button type='submit' className=''>ADD</button>
      </form>
      
    </div>
  )
}

export default Add
