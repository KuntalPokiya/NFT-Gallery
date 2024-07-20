import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import CreateNFTimg from '../assets/CreateNFTimg.png'
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState } from '../store'
import {create} from 'ipfs-http-client'

const auth=
  'Basic '+
  Buffer.from(
    '87f449a7876e4b80b76787f2e02c769a' + ':' + 'tIl56fTqWxhKm+5Kr6YKXkxJwV62SzxTqAadb6fi2V6XFFozsVG1VQ'
  ).toString('base64')

  const client = create({
    host: 'ipfs.infura.io',
    port: '5001',
    protocol: 'https',
    headers: {
      authorization: auth
    }
  })

export const CreateNFT = () => {
  const [modal]=useGlobalState('modal')
  const [title,setTitle]= useState('')
  const [description,setDescription]= useState('')
  const [price,setPrice]= useState('')
  const [fileURL,setFileURL]= useState('')
  const [imgBase64,setImgBase64]= useState(null)

  const handleSubmit=async(e)=>{
    e.preventDefault()

    if(!title || !description || !price ) return
    setGlobalState('modal','scale-0')
    setLoadingMsg('Uploading to IPFS...')

    try {
      const created=await client.add(fileURL)
      setLoadingMsg('Uploaded,approve transaction now...')
      const metadataURI=`https://ipfs.io/ipfs/${created.path}`
      const nft ={title,description,price,metadataURI}
      await mintNFT(nft)

      resetForm()
      setAlert('Minting completed...')
      window.location.reload()
    } catch (error) {
      console.log('Error uploading file',error);
      setAlert('Minting failed...','red')
    }
  }

  const changeImage=async(e)=>{
    const reader=new FileReader()
    if(e.target.files[0]) reader.readAsDataURL(e.target.files[0])
      reader.onload=(readerEvent)=>{
        const file=readerEvent.target.result
        setImgBase64(file)
        setFileURL(e.target.files[0])
      }
  }

  const closeModal=()=>{
    setGlobalState('modal','scale-0')
    resetForm()
  }

  const resetForm=()=>{
    setFileURL('')
    setImgBase64(null)
    setDescription('')
    setPrice('')
    setTitle('')
  }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen 
        flex items-center justify-center bg-black bg-opacity-50
        transform transition-transform duration-300 ${modal}`}>

          <div className='bg-[#151c25] shadow-xl shadow-[#e32970]
              rounded-xl w-11/12 md:w-2/5 h-7/12 p-6'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <div className='flex justify-between items-center text-gray-400'>
                <p className='font-semibold'>Add NFT</p>
                <button type="button" 
                onClick={closeModal}
                className='border-0 bg-transparent focus:outline-none'>  
                  <FaTimes></FaTimes>
                </button>
              </div>
         
              <div className='flex justify-center items-center rounded-xl mt-0'>
                <div className='shrink-0  rounded-xl overflow-hidden' style={{ height: '14rem', width: '14rem' }}>
                  <img className='h-full w-full object-cover cursor-pointer' src={imgBase64 || CreateNFTimg} alt="NFT" />
                </div>
              </div>
              <div className='flex justify-between items-center bg-gray-800 
                    rounded-xl mt-3'>
                <label className='block'> 
                  <span className='sr-only'>Choose Profile Photo</span>
                  <input type="file" 
                  accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
                  className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full
                            cursor-pointer file:border-0 file:text-sm file:font-semibold
                            hover:file:bg-[#e32970] hover:file:text-white hover:file:cursor-pointer focus:outline-none
                            focus:ring-0' 
                  onChange={changeImage}
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
                  onChange={(e)=>setTitle(e.target.value)}
                  value={title}
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
                  onChange={(e)=>setPrice(e.target.value)}
                  value={price}
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
                  onChange={(e)=>setDescription(e.target.value)}
                  value={description}
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
