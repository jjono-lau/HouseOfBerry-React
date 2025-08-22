import React from 'react';
import Title from './Title';
import HouseOfBerryAssets from '../HouseOfBerryAssets/HouseOfBerryAssets';

const About = () => {

    const aboutData = [
        {
            title: 'Our Mission',
            description: 'To create a unique matcha experience that combines quality, flavor, and fun with every sip.',
            image: HouseOfBerryAssets.xoxoMatcha,
        },
        {
            title: 'Our Values',
            description: 'We value quality, sustainability, and community. Our matcha is sourced from Japan and handled with care.',
            image: HouseOfBerryAssets.LYSMatchapink,
        },
        {
            title: 'Our Story',
            description: 'Founded in 2025, House of Berry started as a passion project to bring the best matcha to our community.',
            image: HouseOfBerryAssets.logo,
        },
    ];

    return (
        <div
            id='about'
            className='pb-30 flex flex-col items-center gap-7  px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-primary scroll-mt-30'
        >
            <Title title='About Us' desc='Learn more about our mission and values.' />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {aboutData.map((about, index) => (
                    <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={about.image} alt={about.title} className='w-full rounded-xl' />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{about.title}</h3>
                        <p className='text-sm opacity-80 w-5/6'>{about.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
