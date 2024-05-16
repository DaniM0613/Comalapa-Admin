import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-4'>
      <img className='w-54' src={assets.logo} alt=''/>
      <img className='w-20' src={assets.profile_image} alt=''/>
    </div>
  )
}

export default Navbar
