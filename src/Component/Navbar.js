import React, { useState } from 'react'
import EazyCart_logo from '../Images/eazycart_logo.png'
import { BsCart4 } from 'react-icons/bs'
import { LuLogIn } from 'react-icons/lu'
const Navbar = () => {
    const [navColor, setNavColor] = useState(false)

    const ChangeNavColor = () => {
        if (window.scrollY >= 80) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    }
    window.addEventListener('scroll', ChangeNavColor)

    return (
        <nav className={navColor ? 'relative bg-blue-500' : 'relative bg-transparent'}>
            <div className=' flex justify-between my-5 mx-8 items-center fixed top-0 z-10 container w-100 '>


                <img src={EazyCart_logo} alt='eazy_cart_logo' className='w-40 ' />
                <input type='text' className='border-solid border-2 border-grey-500 w-96 h-12 text-base pl-6 rounded-full hover:border-solid border-2 border-grey-800 text-grey-800' placeholder='Search for the Product' />
                <div className='flex '>
                    <div className='flex items-center'>
                        <LuLogIn /> <button className='flex px-4 py-2 text-lg align-middle '>sign in</button>
                    </div>
                    <div className='flex items-center ml-10'>
                        <BsCart4 /> <button className='flex px-4 py-2 text-lg  align-middle'>Cart</button>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
