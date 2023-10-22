import Image from 'next/image'
import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Reviews = () => {
    return (
        <div className="container lg:px-[8rem] mt-20 lg:mt-10 w-full h-[47.69rem] text-[2.88rem] text-darkslategray font-josefin-sans lg:flex grid gap-16 items-center">
            <div className="">
                <div className="relative">
                    <div className="bg-orangered z-50 absolute right-[-3rem] top-[-3.5rem] w-[100px] h-[100px] lg:w-[136px] lg:h-[136px] rounded-full flex justify-center items-center">
                        <Image className="m-auto w-[3.3rem]" alt="" src="/images/quote.png" width={100} height={100} />
                    </div>
                </div>
                <div className="ring-2 relative ring-darkslategray rounded-[36px] mx-auto h-fit w-fit">
                    <Image className=" rounded-[36px] w-[35.63rem] object-cover" alt="" src="/images/review1.png" width={300} height={300} quality={100} />
                    <Image className="h-[3.35rem] w-[224px] absolute left-[30%] right-[50% bottom-[-1.65rem] " alt="" src="/images/paginate.png" width={300} height={300} />
                </div>
            </div>
            {/* <div className="absolute top-[6.38rem] left-[0rem] rounded-17xl box-border w-[35.63rem] h-[39.63rem] border-[2px] border-solid border-darkslategray" /> */}
            <div className="relative">
                <Image className='w-full lg:w-[32rem] h-[27rem] sm:h-[22rem]' src='/images/review.png' width={250} height={250} alt='' />
                <div className="absolute left-[2rem] right-[2rem] bottom-[2rem] top-[2rem] flex flex-col justify-center items-center text-center lg:items-start lg:justify-start lg:text-start">
                    <h1 className="leading-[3rem] sm:leading-[3.75rem] font-semibold lg:whitespace-nowrap">Customer Reviews</h1>
                    <p className=" text-[1.38rem] leading-[1.7rem] sm:leading-[2.13rem] font-medium w-[25.81rem">As we continue to push for better regulation in the Australian pet food industry it can be hard to trust many pet food brands. Our 2021 Best Cat Food in Australia list will offer you a great starting point in deciding what to feed your cat.</p>
                </div>
                <div className="flex justify-center lg:justify-start lg:pt-6 pt-4">
                    <div className="bg-darkslategray flex justify-center items-center rounded-[90%] h-[3rem] w-[6rem] cursor-pointer">
                        <BsArrowLeft className='text-white text-2xl' />
                    </div>
                    <div className="bg-darkslategray  flex justify-center items-center rounded-[90%] h-[3rem] w-[6rem] ml-[-2rem] border cursor-pointer">
                        <BsArrowRight className='text-white text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews