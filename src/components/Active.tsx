import Image from 'next/image'
import React from 'react'
import { useSwiperSlide } from 'swiper/react'

type TProps = {
    id: number,
    img: string,
    title: string,
    content: string
}

const Active = ({ service }: any) => {

    const swiperSlide = useSwiperSlide()
    return (
        <div  className={`${swiperSlide.isActive ? 'ring-0' : 'ring-1'} mt-8 px-6 py-8 !mx-0 ring-gray-400 rounded-[66px]  ${service.id % 2 === 1 ? 'skew-y-[8deg]' : '-skew-y-[8deg]'} ${swiperSlide.isActive && 'bg-gold'}`}>
            <div className={`rounded-full  lg:w-[6rem] lg:h-[6rem] w-[5rem] h-[5rem] flex justify-center items-center  -skew-y-[8deg] ${swiperSlide.isActive ? 'bg-antiquewhite' :'bg-gold'} ${service.id % 2 === 0 && 'skew-y-[7deg]'}`}>
                <Image className={`lg:h-[4rem] lg:w-[4rem] w-[3rem] h-[3rem]`} alt='' src={service.img} width={100} height={100} />
            </div>
            <h3 className={`text-[1.63rem] leading-[1.88rem] text-darkslategray -skew-y-[8deg] font-medium ${service.id % 2 === 0 && 'skew-y-[7deg]'} ${service.id % 2 === 0 && 'pt-[3.5rem]'} `}>{service.title}</h3>
            <p className={`text-[1.25rem] text-darkslategray  ${service.id % 2 === 0 && 'skew-y-[7deg] pb-6'} ${service.id % 2 === 1 && 'pb-12'} -skew-y-[8deg] leading-[1.94rem]`}>{service.content}</p>
            <button className={` rounded-[190px] box-border w-fit py-[0.5rem] px-[2rem] text-[1.25rem] text-darkslategray border-[2px] border-solid border-darkslategray -skew-y-[8deg] ${service.id % 2 === 0 && 'skew-y-[7deg]'} hover:bg-darkslategray hover:transition hover:duration-300 hover:text-antiquewhite`}>
                <p className=" tracking-[0.09em] leading-[2.38rem] font-medium ">Explore</p>
            </button>
        </div>
    )
}

export default Active