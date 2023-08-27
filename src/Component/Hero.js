import React from 'react'
import Carousel from '../Component/Carousel';
import bigCarousel from '../Images/bigCarousel.png'
import bigCarousel2 from '../Images/bigCarousel2.png'
import bigCarousel3 from '../Images/bigCarousel3.png'
import bigCarousel4 from '../Images/bigCarousel4.png'
import carouselVideo from '../Images/carouselVideo.mp4'

const Hero = () => {
    const slides = [
        bigCarousel4,
        bigCarousel3,
        bigCarousel2,
        bigCarousel,
    ]
    return (
        <div className='max-m-lg top-0'>
            <Carousel autoSlide={true} >
                {
                    [...slides.map((s) => (
                        <img src={s} alt="EazyCart" className='w-100 h-fit' />
                    )
                    ), <video src={carouselVideo} autoPlay muted loop />]

                }
            </Carousel>
        </div >
    )
}

export default Hero
