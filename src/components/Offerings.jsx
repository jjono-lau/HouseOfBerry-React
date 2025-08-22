import React from 'react'
import Title from './Title';
import MenuCard from './MenuCard';
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";


const Offerings = () => {

  const menuData = [
    {
      title: 'Classic Matcha',
      description: 'A traditional matcha drink with a rich, earthy flavor and vibrant green color.',
      icon: HouseOfBerryAssets.matcha
    },
    {
      title: 'Strawberry Matcha',
      description: 'A delightful mix of berries and matcha, offering a burst of flavor in every sip.',
      icon: HouseOfBerryAssets.StrawberryMatcha
    },
    {
      title: 'Blueberry Matcha',
      description: 'A unique combination of blueberries and matcha, creating a vibrant and tasty drink.',
      icon: HouseOfBerryAssets.BlueberryMatcha
    },
    {
      title: 'Salted Vanilla Matcha',
      description: 'A savory twist on the classic vanilla matcha, with a hint of salt to enhance the flavor.',
      icon: HouseOfBerryAssets.SaltedVanillaMatcha
    }
  ]

  return (
    

    // id='offerings' allows for the offering section to be linked to from the navbar

    <div id='offerings' className='bg-primary pb-30 relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 scroll-mt-30 text-gray-700 dark:text-white'>




      {/* can use ' when " " covers the setence otherwise can use &apos; or put curly brackets around{ \' } */}

      <Title title='The Berry Difference' desc="Matcha made fun, flavour made bold, and moments made memorable. We're not just whisking drinks &mdash; we&apos;re shaking up expectations. Here&apos;s what makes us different..."/>
      <img src={HouseOfBerryAssets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full'>
        {menuData.map((menu, index) => (
          <MenuCard key={index} menuData={menu} index={index} />
        ))}
      </div>

    </div>
  )
}

export default Offerings
