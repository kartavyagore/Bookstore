import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rouunded-lg w-fit' >
            <BsArrowLeft className='text2xl'/>
        </Link>
    </div>
  )
}

export default BackButton