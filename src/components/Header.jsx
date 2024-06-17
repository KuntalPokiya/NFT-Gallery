import React from 'react'
import timlessLogo from '../assets/timeless.png'

const Header = () => {
  return (
    <div className=" flex justify-between md:justify-center items-center py-4 mx-auto">
        <div className="md:flex-[0.5] w-120 h-auto flex-initial justify-center items-center ">
            <img className="w-44 cursor-pointer"src={timlessLogo} alt="Logo" />
        </div> 
        <ul className='md:flex-[0.5] text-white md:flex
        hidden list-none justify-between items-center flex-initial'>
            <li className='mx-4 cursor-pointer md:text-xl'>Market</li>
            <li className='mx-4 cursor-pointer md:text-xl'>Artist</li>
            <li className='mx-4 cursor-pointer md:text-xl'>Features</li>
            <li className='mx-4 cursor-pointer md:text-xl'>Community</li>
        </ul>
        <button className='shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-s p-2 rounded-full md:justify-center mx-12'>
            Connect wallet
        </button>
    </div>
  )
}

export default Header 