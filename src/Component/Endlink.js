import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Endlink = () => {
    return (
        <footer>
            <div className='bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 text-white leading-loose pt-8 mx-6 pb-4 rounded-md'>

                <h1 className='text-4xl font-bold'>EAZY CART<span className='text-3xl'>(Online Store)</span> </h1>
                <div className='flex justify-center items-center gap-4 my-4'>
                    <BsFacebook size={25} className='text-blue-800 transition duration-150 transition-linear cursor-pointer hover:text-gray-100' />
                    <BsInstagram size={25} className='text-blue-800 transition duration-150 transition-linear cursor-pointer hover:text-gray-100' />
                    <BsTwitter size={25} className='text-blue-800 transition duration-150 transition-linear cursor-pointer hover:text-gray-100' />
                    <BsLinkedin size={25} className='text-blue-800 transition duration-150 transition-linear cursor-pointer hover:text-gray-100' />
                </div>


                <p class="copy-right">
                    &copy; 2023-All rights are reseved
                    | Developed by : <a href="https://navaharish.github.io/Brand-Makers/" className='decoration-8 text-white'>Brand
                        Makers</a>
                </p>
            </div>
        </footer>
    )
}

export default Endlink
