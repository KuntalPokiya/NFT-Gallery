import React, { useState } from 'react'
import Identicon from'react-identicons'
import {FaTimes} from 'react-icons/fa'
import CreateNFTimg from '../assets/CreateNFTimg.png'
import { setGlobalState, truncate, useGlobalState } from '../store'

export const ShowNFT = () => {
  const [modal]=useGlobalState('showModal')
  const [nft]=useGlobalState('nft')
  const [connectedAccount]=useGlobalState('connectedAccount')

  const onChangePrice=()=>{
    setGlobalState('showModal','scale-0')
    setGlobalState('updateModal','scale-100')
  }

  const handleSubmit=()=>{
    closeModal()
  }

  const closeModal=()=>{
    setGlobalState('showModal','scale-0')
  }



  return (
    <div className={`fixed top-0 left-0 w-screen h-screen 
        flex items-center justify-center bg-black bg-opacity-50
        transform transition-transform duration-300 ${modal}`}>

          <div className='bg-[#151c25] shadow-xl shadow-[#e32970]
              rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <div className='flex flex-col'>
              <div className='flex justify-between items-center text-gray-400'>
                <p className='font-semibold'>Buy NFT</p>
                <button type="button" 
                onClick={closeModal}
                className='border-0 bg-transparent focus:outline-none'>  
                  <FaTimes></FaTimes>
                </button>
              </div>
         
              <div className='flex justify-center items-center rounded-xl mt-0'>
                <div className='shrink-0  rounded-xl overflow-hidden' style={{ height: '18rem', width: '18rem' }}>
                  <img className='h-full w-full object-cover cursor-pointer' 
                  src={nft?.metadataURI} alt={nft?.title} />
                </div>
              </div>

              <div className='flex flex-col justify-start rounded-xl'>
                <h4 className='text-white font-semibold'>{nft?.title}</h4>
                <p className='text-gray-400 text-xs my-0.5'>
                {nft?.description}</p>
                <div className='flex  justify-between items-center mt-3 text-white'>
                  <div className='flex justify-start items-center'>
                    <Identicon className='h-10 w-10 object-contain rounded-full mr-3'
                     string={'a'} size={50}/>
                     <div className='flex flex-col justify-center items-start'>
                      <small className='text-white font-bold'>@Owner</small>
                      <small className='text-pink-800 font-bold'>{truncate(nft?.owner,4,4,11)}</small>
                     </div>
                  </div>

                  <div className='flex flex-col items-center mr-4'>
                    <small className='text-xs'>Current Price</small>
                    <p className='text-sm font-semibold'>{nft?.cost} ETH</p>
                  </div>
                </div>
              </div>
          <div className='flex justify-center items-center space-x-2'>

            {connectedAccount==nft?.owner
              ? (<button className='flex justify-center items-center shadow-lg shadow-black text-white text-sm
                bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full px-3 py-2 mt-6 w-31 
                font-semibold drop-shadow-xl border border-transparent hover:bg-transparent
               hover:text-[#e32970] hover:border hover:border-[#bd255f]  focus:outline-none focus:ring'
               onClick={onChangePrice}>
                   Change Price   
               </button> )
              : (<button className='flex justify-center items-center shadow-lg shadow-black text-white text-sm
                bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full px-3 py-2 mt-6 w-24 
                font-semibold drop-shadow-xl border border-transparent hover:bg-transparent
               hover:text-[#e32970] hover:border hover:border-[#bd255f]  focus:outline-none focus:ring'>
                    Purchase 
                </button>)
            }
                  
            </div>
            </div>

            </div>
          </div>
  )
}
export default ShowNFT
