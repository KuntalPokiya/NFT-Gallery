import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import CreateNFTimg from '../assets/CreateNFTimg.png'
import { setGlobalState, useGlobalState } from '../store'

export const UpdateNFT = () => {
  const [modal]=useGlobalState('updateModal')
  const [price,setPrice]= useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(!price ) return

    console.log('Updated...')
    closeModal()
  }

  const closeModal=()=>{
    setGlobalState('updateModal','scale-0')
    resetForm()
  }

  const resetForm=()=>{
    setPrice('')
  }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen 
        flex items-center justify-center bg-black bg-opacity-50
        transform transition-transform duration-300 ${modal}`}>

          <div className='bg-[#151c25] shadow-xl shadow-[#e32970]
              rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <div className='flex justify-between items-center text-gray-400'>
                <p className='font-semibold'>Candy NFT</p>
                <button type="button" 
                onClick={closeModal}
                className='border-0 bg-transparent focus:outline-none'>  
                  <FaTimes></FaTimes>
                </button>
              </div>
         
              <div className='flex justify-center items-center rounded-xl mt-0'>
                <div className='shrink-0  rounded-xl overflow-hidden' style={{ height: '14rem', width: '14rem' }}>
                  <img className='h-full w-full object-cover cursor-pointer' src={CreateNFTimg} alt="NFT" />
                </div>
              </div>
 
              <div className='flex justify-between items-center bg-gray-800 
                    rounded-xl mt-3'>
                  <input type="number" 
                  className='block w-full text-sm text-slate-500 focus:outline-none
                            focus:ring-0 cursor-pointer bg-transparent border-0' 
                  placeholder='Price (ETH)'
                  min={0.001}
                  step={0.001}
                  name='price'
                  onChange={(e)=>setPrice(e.target.value)}
                  value={price}
                  required
                  />
              </div>

              <div className='flex justify-center items-center'>
              <button className='flex justify-center items-center shadow-lg shadow-black text-white text-sm
                         bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full px-3 py-2 mt-6 w-31
                         font-semibold drop-shadow-xl border border-transparent hover:bg-transparent
                        hover:text-[#e32970] hover:border hover:border-[#bd255f]  focus:outline-none focus:ring'>
                Update now 
            </button>
            </div>

            </form>
          </div>
        </div>
  )
}
export default UpdateNFT
