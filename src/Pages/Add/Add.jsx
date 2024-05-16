import { assets } from '../../assets/assets'

function Add() {
  return (
    <div className='w-full ml-6 mt-12 text-slate-600 text-xl'>
      <form className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2.5'>
           <p>Upload Image</p>
           <label htmlFor='image'>
             <img src={assets.upload_area} alt='' className=' w-32 border-2 border-orange-700 border-solid'/>
           </label>
            <input type='file' id='image' hidden required/>
        </div>
        <div className=' w-96 flex flex-col gap-2.5'>
            <p>Product Name</p>
            <input type='text' name='name' placeholder='type here' className=' p-2 border-2 border-orange-700 border-solid'/>
        </div>
        <div className=' w-96 flex flex-col gap-2.5'>
            <p>Product Description</p>
            <textarea name='description' rows='6' placeholder='Write Contect Here' required className='p-2 border-2 border-orange-700 border-solid'></textarea>
        </div>
        <div className=' flex gap-7'>
            <div className='flex flex-col gap-2.5'>
                <p>Product category</p>
                <select name='category' className=' max-w-32 p-2 border-2 border-orange-700 border-solid'>
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
               <input type='number' name='price' placeholder='Q.20' className=' max-w-32 p-2 border-2 border-orange-700 border-solid'/>
            </div>
        </div>
         <button type='submit' className='bg-black text-white p-4 w-32'>ADD</button>
      </form>
      
    </div>
  )
}

export default Add
