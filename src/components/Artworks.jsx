import React from 'react'
import { setGlobalState, useGlobalState } from '../store';

export const Artworks = () => {
    const [nfts]=useGlobalState('nfts')
  return (
    <div className='bg-[#151c25] gradient-bg-artworks'>
        <div className='w-4/5 py-10 mx-12'>
            <h4 className='text-white text-3xl font-bold uppercase 
                text-gradient'>
                Latest Artworks 
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 
                    gap-6 md:gap-4 lg:gap-6 py-2.5'>
                {nfts.map((nft,i)=>(
                    <Card key={i} nft={nft}/>
                ))}
            </div>
            <div className='text-center my-5'>
            <button className='shadow-lg shadow-black text-white text-sm
             bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full p-2'>
                Load More 
            </button>
            </div>
        </div>
    </div>
  )
}

const Card=({nft})=>{

    const setNFT=()=>{
        setGlobalState('nft',nft)
        setGlobalState('showModal','scale-100')
    }

   return(
    <div className='w-full shadow-xl shadow-black rounded-md overflow-hidden
            bg-gray-800 my-2 p-3'>
        <img 
            className=' w-full object-cover shadow-lg shadow-black rounded-lg mb-3'
            src={nft.metadataURI} alt={nft.title} />
        <h4 className='text-white font-semibold'>{nft.title}</h4>
        <p className='text-gray-400 text-sm my-1'>
            {nft.description}</p>
        <div className='flex justify-between items-center mt-3 text-white'>
            <div className='flex flex-col'>
                <small className='text-xs'>
                    Current Price
                </small>
                <p className='text-sm font-semibold'>
                    {nft.cost} ETH
                </p>
            </div>
            <button className='shadow-lg shadow-black text-sm
             bg-[#e32970] hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1'
             onClick={setNFT}>
                View Details 
            </button>
        </div>
    </div>
   ) 
}

export default Artworks 
