import React from 'react'
import HouseOfBerryAssets from '../HouseOfBerryAssets/HouseOfBerryAssets'

const Footer = ({theme}) => {
  return (
    <div className='bg-primary dark:bg-black pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
      {/*footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div className='space-y-5 text-sm text-gray-600 dark:text-gray-500'>
            <img src={theme ==="dark" ? HouseOfBerryAssets.logo_dark: HouseOfBerryAssets.logo}  className='w-32 sm:w-44'
            alt=''
            />
            <p className='max-w-md'>
                
                House of Berry isn't just about coffee or matcha. It's about turning everyday moments into something special — one sip at a time.
            </p>
            <ul className='flex gap-8'>
                <li><a className='hover:text-pink-400 ' href='#hero'>HOME</a></li>
                <li><a className='hover:text-pink-400 ' href='#about'>ABOUT</a></li>
                <li><a className='hover:text-pink-400 ' href='#offerings'>OFFERINGS</a></li>
                <li><a className='hover:text-pink-400 ' href='#team'>TEAM</a></li>
                <li><a className='hover:text-pink-400 ' href='#faq'>FAQS</a></li>
                <li><a className='hover:text-pink-400 ' href='#contact'>CONTACT</a></li>
            </ul>
        </div>    
        <div className='text-gray-600 dark:text-gray-500'>
            <h3 className='font-semibold'>
                Follow us on Instagram
            </h3>
            <p className='text-sm mt-2 mb-6'>
                The latest updates on my journey to bringing the best matcha to New Zealand.
            </p>
        </div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6'/>
        {/* Footer bottom */}
        <p>
            Copyright 2025 &copy; HouseOfBerry - All Right Reserved. 
        </p>
        <div>
            <img src={HouseOfBerryAssets.arrow_pink}/>
        </div>
    </div>
  )
}

export default Footer
