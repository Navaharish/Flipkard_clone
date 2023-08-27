import React from 'react'
import Cards from './Cards'

const Product = () => {
    const products = [
        {
            id: 1,
            name: 'Laptop',
            href: '#',
            price: '$1500',
            imageSrc: 'https://images.unsplash.com/photo-1629757509637-7c99379d6d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 2,
            name: 'Bluetooth Headset',
            href: '#',
            price: '$55',
            imageSrc: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 3,
            name: 'Iphone Mobile',
            href: '#',
            price: '$135',
            imageSrc: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 4,
            name: 'Gaming Computer',
            href: '#',
            price: '$2500',
            imageSrc: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: 'Professional camera',
            href: '#',
            price: '$999',
            imageSrc: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 6,
            name: 'Apple Tablet',
            href: '#',
            price: '$1500',
            imageSrc: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 7,
            name: 'Wireless Headset',
            href: '#',
            price: '$499',
            imageSrc: 'https://images.unsplash.com/photo-1623998022290-a74f8cc36563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhciUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 8,
            name: 'Sun Glass',
            href: '#',
            price: '$25',
            imageSrc: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 9,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        }, {
            id: 10,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 11,
            name: 'Focus Paper Refill',
            href: '#',
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 12,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 13,
            name: 'Metallic Watch',
            href: '#',
            price: '$20',
            imageSrc: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 14,
            name: 'Colledge Bag',
            href: '#',
            price: '$25',
            imageSrc: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },]
    return (
        <div>
            <h1 className='font-bold text-5xl font-sans tracking-normal mx-auto mt-8'>PRODUCT</h1>
            <div className=' h-2 w-40 rounded-full bg-gradient-to-r from-red-500 to-blue-700 flex mx-auto my-5'></div>
            <Cards products={products} />
        </div>
    )
}

export default Product
