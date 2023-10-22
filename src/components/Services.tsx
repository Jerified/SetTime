'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import {Navigation, Pagination} from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react"


import "swiper/css"
// import "swiper/css/navigation"
import SlideNavButton from './SlideNavButton'
import Active from './Active'
// import { neue } from 'next/font/google'

// const inter = Josefin_Sans({ subsets: ['latin'] })

// SwiperCore.use([Navigation])

const Services = () => {

   const swiperSlide = useSwiperSlide()

    const [activeIndex, setActiveIndex] = useState(0)


    const services = [
        {
            id: 1,
            title: 'Pharmacy',
            img: '/images/frame1.png',
            content: 'Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation'
        },
        {
            id: 2,
            title: 'Breed-specific Haircuts',
            img: '/images/framee2.png',
            content: "Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting."
        },
        {
            id: 3,
            title: 'cloths',
            img: '/images/frame3.png',
            content: "Is your dog at the top of his/her fashion game? Don't forget a dog bikini or swim trunks for your pet's next vacation! Whether poolside, at the beach, or on the yacht, your pooch will look summer-ready"
        }
    ]
    return (
        <section className='container lg:px-[8rem] lg:!pr-0 '>
            <div className="py-20">
                <p className="text-[2.88rem] tracking-[0.06em] leading-[2.38rem] font-medium  text-darkslategray pb-12">Our Service</p>
                <Swiper navigation slidesPerView={1} spaceBetween={15} breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 }
                }} modules={[Navigation, Pagination]} 
                // rewind={true}
                loop={true}
                className='!mx-0'
                // renderSlide = {(slide, index) => (

                // )}
                //  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"> */}
                        {services.map((service, index) => (
                            <SwiperSlide key={service.id}>
                                
                                <Active service={service} />
                                {/* {({isActive}: any) => (
                                    <p className="">{isActive ? 'hello' : ''}</p>
                                )} */}
                                {/* <p className="">{swiperSlide.isActive && 'hello'}</p> */}
                            </SwiperSlide>
                            
                        ))}
                        <SlideNavButton active={activeIndex} />
                        
                    {/* </div> */}
                    
                </Swiper>



            </div>
        </section>
    )
}

export default Services