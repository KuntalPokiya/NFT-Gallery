import React from 'react'
import timlessLogo from '../assets/timeless.png'
import { connectWallet } from '../Blockchain.services'
import { useGlobalState } from '../store'
import { truncate } from '../store/index'

const Header = () => {
  const [connectedAccount]=useGlobalState('connectedAccount')
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
        {connectedAccount
          ? (<button className='shadow-xl shadow-black text-white bg-[#e32970]
            hover:bg-[#bd255f] md:text-s p-2 rounded-full md:justify-center mx-12'
            >
         {truncate(connectedAccount,4,4,11)}
     </button>)

          : (<button className='shadow-xl shadow-black text-white bg-[#e32970]
            hover:bg-[#bd255f] md:text-s p-2 rounded-full md:justify-center mx-12'
            onClick={connectWallet}>
         Connect wallet
     </button>)
        }
    </div>
  )
}

export default Header 