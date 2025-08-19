import React from 'react'
import assets from '../assets/assets'
import Title from './Title';

const Offerings = () => {

  const servicesData = [
    {
      title: 'Advertising',
      description: 'We create and manage advertising campaigns to help businesses reach their target audience effectively.',
      icon: assets.ads_icon
    },
    {
      title: 'Content Marketing',
      description: 'Our team produces high-quality content that engages and informs your audience.',
      icon: assets.marketing_icon
    },
    {
      title: 'Content Writing',
      description: 'We provide professional content writing services to enhance your brand\'s online presence.',
      icon: assets.content_icon
    },
    {
      title: 'Social Media Management',
      description: 'We manage your social media presence to enhance brand visibility and engagement.',
      icon: assets.social_icon
    }
  ]

  return (
    

    // id='offerings' allows for the offering section to be linked to from the navbar

    <div id='offerings' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>



      {/* can use ' when " " covers the setence otherwise can use &apos; or put curly brackets around{ \' } */}

      <Title title='The Berry Difference' desc="Matcha made fun, flavour made bold, and moments made memorable. We're not just whisking drinks &mdash; we&apos;re shaking up expectations. Here&apos;s what makes us different..."/>


    </div>
  )
}

export default Offerings
