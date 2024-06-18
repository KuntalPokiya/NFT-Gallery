import React from 'react'
const imgHero='https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg';
import Identicon  from 'react-identicons'

const Hero =()=>{
  return (
    <div className='flex flex-col md:flex-row w-4/5cjustify-between
        items-center mx-auto py-10'>
        <div className='md:w-3/6 w-full'>
            <div className='mx-12'>
                <h1 className='text-white text-5xl font-bold '>
                    Buy and Sell<br/>
                    Digital Arts,<br/>
                    <span className='text-gradient'>NFTs</span> Collections
                    </h1>
                        <p className='text-gray-500 font-semibold text-sm mt-3'>
                            Mint and collect the hottest NFTs around.
                        </p>
            </div>
            <div className='fles mt-5'>
                <button className='shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] md:text-s p-2 rounded-full md:justify-center mx-12'>Create NFT</button>
            </div>
            <div className='w-3/4 justify-between items-center mt-5 flex flex-row'>
            <div className='text-white items-center mx-auto '>
                    <p className='font-bold'>124k</p>
                    <small className='text-gray-300 font-bold'> Users</small>
                </div>

                <div className='text-white items-center mx-auto'>
                    <p className='font-bold mx-2.5 '>152k</p>
                    <small className='text-gray-300 font-bold'> Artworks</small>
                </div>

                <div className='text-white items-center mx-auto'>
                    <p className='font-bold mx-0.9'>204k</p>
                    <small className='text-gray-300 font-bold'> Artists</small>
                </div>
            </div>
        </div>
        <div className='shadow-xl shadow-black md:w-1/3 w-full sm:w-1/2
        mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800 lg:mx-40 sm:mx-0 md:mx-0'>
            <img className=" w-full object-cover"
                src={imgHero} 
                alt="Hero"
            />
            <div className='flex justify-start items-center p-3'>
                <Identicon 
                className='h-10 w-10 object-contain rounded-full mr-3'
                string={'0x21...786a'} size={50}/>
                <div>
                    <p className='text-white font-semibold'>0x21...786a</p>
                    <small className='text-[#bd255f] font-bold '>@you</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
