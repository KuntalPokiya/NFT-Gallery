import React from 'react'
import {FaTimes} from 'react-icons/fa'
import CreateNFTimg from '../assets/CreateNFTimg.png'

export const CreateNFT = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen 
        flex items-center justify-center bg-black bg-opacity-50
        transform transition-transform duration-300 scale-100'>
          <div className='bg-[#151c25] shadow-xl shadow-[#e32970]
              rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <form className='flex flex-col'>
              <div className='flex justify-between items-center text-gray-400'>
                <p className='font-semibold'>Add NFT</p>
                <button type="button" className='border-0 bg-transparent focus:outline-none'>  
                  <FaTimes></FaTimes>
                </button>
              </div>
         
              <div className='flex justify-center items-center rounded-xl mt-0'>
                <div className='shrink-0  rounded-xl overflow-hidden' style={{ height: '14rem', width: '14rem' }}>
                  <img className='h-full w-full object-cover cursor-pointer' src={CreateNFTimg} alt="NFT" />
                </div>
              </div>
              <div className='flex justify-between items-center bg-gray-800 
                    rounded-xl mt-0'>
                <label className='block'> 
                  <span className='sr-only'>Choose Profile Photo</span>
                  <input type="file" 
                  accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
                  className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
                            cursor-pointer file:border-0 file:text-sm file:font-semibold
                            hover:file:bg-[#e32970] hover:file:text-white hover:file:cursor-pointer focus:outline-none
                            focus:ring-0' 
                  required
                  />
                </label>
              </div>

         
              <div className='flex justify-between items-center bg-gray-800 
                    rounded-xl mt-3'>
                  <input type="text" 
                  className='block w-full text-sm text-slate-500 focus:outline-none
                            focus:ring-0 cursor-pointer bg-transparent border-0' 
                  placeholder='Title'
                  name='title'
                  required
                  />
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
                  required
                  />
              </div>

              <div className='flex justify-between items-center bg-gray-800 
                    rounded-xl mt-3'>
                  <textarea type="text" 
                  className='block w-full text-sm text-slate-500 focus:outline-none
                            focus:ring-0 cursor-pointer bg-transparent border-0 h-20 resize-none' 
                  placeholder='Description'
                  name='description'
                  required
                  />
              </div>
              <div className='flex justify-center items-center'>
              <button className='flex justify-center items-center shadow-lg shadow-black text-white text-sm
                         bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full px-3 py-2 mt-6 w-24 
                         font-semibold drop-shadow-xl border border-transparent hover:bg-transparent
                        hover:text-[#e32970] hover:border hover:border-[#bd255f]  focus:outline-none focus:ring'>
                Mint now 
            </button>
            </div>

            </form>
          </div>
        </div>
  )
}
export default CreateNFT
