import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useSwiper } from 'swiper/react'

const SlideNavButton = ({activeIndex}: any) => {  

    const swiper = useSwiper()
    return (
        <div className="flex justify-end mr-24 lg:mr-[10rem] lg:pt-6 pt-4">
            <div className="bg-darkslategray flex justify-center items-center rounded-[90%] h-[3rem] w-[6rem] cursor-pointer" onClick={() => swiper.slidePrev()}>
                <BsArrowLeft className='text-white text-2xl' />
            </div>
            <div className="bg-darkslategray  flex justify-center items-center rounded-[90%] h-[3rem] w-[6rem] ml-[-2rem] border cursor-pointer" onClick={() => swiper.slideNext()}>
                <BsArrowRight className='text-white text-2xl' />
            </div>
        </div>

    )
}

export default SlideNavButton