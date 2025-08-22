import React from 'react'

const Title = ({title, desc}) => {
  return (
    <div>
      <>
       <h2 className="pt-10 pb-10 text-7xl sm:text-8xl font-medium text-center">{title}</h2>

        <h3 className='max-w-l text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</h3>
      </>
    </div>
  )
}

export default Title

