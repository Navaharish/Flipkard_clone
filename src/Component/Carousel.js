import React, { useEffect, useState } from 'react'
import { LuChevronsLeft, LuChevronsRight } from 'react-icons/lu'

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)
    const prev = () => {
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    }
    const next = () => {
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    }
    useEffect(() => {
        if (!autoSlide) return;
        const setSlideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(setSlideInterval)
    })
    return (
        <div className=' relative overflow-hidden'>
            <div className='flex transform-translate ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}

            </div>
            <div className='absolute inset-0 flex items-center justify-between  p-4'>
                <button onClick={prev} className='p-1 rounded-full bg-white/80 text-grey-800 shadow transition-transform transform delay-500 translate-x-0  hover:bg-white'>
                    <LuChevronsLeft size={40} />
                </button>
                <button onClick={next} className='p-1 rounded-full bg-white/80 text-grey-800 shadow transition-transform transform delay-500 translate-x-0 hover:bg-white'>
                    <LuChevronsRight size={40} />

                </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex justify-center items-center gap-2'>
                    {
                        slides.map((_, i) => {
                            return <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? 'p-2' : 'bg-opacity-50'}`} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel
