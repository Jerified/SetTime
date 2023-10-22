import Image from 'next/image'
import React from 'react'

const Detail = () => {
    return (
        <section className="bg-darkcyan">
            <div className=" w-full py-[70px] container lg:px-[8rem] text-[1.38rem] text-antiquewhite lg:grid lg:grid-cols-2 flex flex-col gap-[5rem] lg:gap-[65px] items-center justify-center">
                {/* <Image className="absolute top-[16.85rem] left-[0rem] w-[11.63rem] h-[3.56rem] overflow-hidden" alt="" src="Frame.svg" /> */}
                <Image className=" w-[33.88rem]" alt="" src="/images/Union.png" width={300} height={300} quality={100} />
                <div className="flex flex-col justify-center items-center text-center lg:items-start lg:justify-start lg:text-start">
                    <h3 className="text-[2.88rem] leading-[3.75rem] font-semibold">Making pet parenting easy for everyone</h3>
                    <p className="leading-[2.13rem] font-medium w-[32.06re">Could this be the dog with the longest tail? The Rampur Greyhound - shy, sensitive, alert, and faithful. This is a breed that has climbed its way to being top dog because of its intelligence</p>
                    <div className=" leading-[2.44rem] font-medium pt-6">
                        <div className="flex gap-2 items-center">
                            <div className='rounded-[50%] ring-2 ring-darkslategray w-[0.63rem] h-[0.63rem]' />
                            <p className="">Adoption</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className='rounded-[50%] ring-2 ring-darkslategray w-[0.63rem] h-[0.63rem]' />
                            <p className="">Frozen Raw</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className='rounded-[50%] ring-2 ring-darkslategray w-[0.63rem] h-[0.63rem]' />
                            <p className="">Next Day Delivery</p>
                        </div>
                    </div>
                    <button className={` rounded-[190px] box-border w-fit py-[0.5rem] px-[2rem] text-left text-[1.25rem] text-darkslategray border-[2px] border-solid border-darkslategray hover:bg-darkslategray hover:transition hover:duration-300 hover:text-antiquewhite mt-6`}>
                <p className=" tracking-[0.09em] leading-[2.38rem] font-medium ">Explore</p>
            </button>
                </div>


            </div>

        </section>

    )
}

export default Detail