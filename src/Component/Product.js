import React from 'react'
import Cards from './Cards'

const Product = () => {
    return (
        <div>
            <h1 className='font-bold text-5xl font-sans tracking-normal'>PRODUCT</h1>
            <div className=' bg-gradient-to-r from-red to-blue  h-2 w-40 rounded-full'></div>
            <Cards />
        </div>
    )
}

export default Product
