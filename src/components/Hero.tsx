import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className="lg:flex justify-between container">
            <div className="relative w-full text-left text-[3.5rem] lg:text-[6rem] sm:text-[5rem] text-darkslategray">
                <div className="absolute top-[5.63rem] left-[0.19rem] tracking-[-0.05em] leading-[3.5rem] sm:leading-[4.5rem] lg:leading-[5.75rem]  uppercase lg:w-[49.06rem] ">
                    <p className="inline-bloc ">
                    <b className='whitespace-nowra'>{`A pet-first `}</b>
                    <span className="text-orangered">approach to</span>
                    <b> wellness</b>
                    </p>
                    
                </div>
                <Image className="absolute top-[0rem] left-[18.8rem] lg:left-[36rem] lg:top-[2rem] w-[60.09rem h-[20.24rem] overflow-hidden" alt="" src="/images/dashes.svg" width={200} height={50} />
                <div className="absolute top-[0rem] left-[6.5rem] text-[1.5rem] tracking-[0.01em] leading-[2.38rem] font-medium text-darkcyan inline-block w-[23.5rem">Available in select states</div>
                <Image className="absolute top-[0.65rem] left-[1.8rem] w-[4.09rem] h-[3.24rem] overflow-hidden" alt="" src='/images/arrowDown.svg' width={30} height={30} />
                <div className="absolute top-[24rem] sm:top-[25.38rem] left-[0rem] rounded-[247px] bg-orangered flex flex-row items-start justify-start py-[1rem] px-[2.25rem] text-[1.25rem]">
                
                    <div className="relative tracking-[0.09em] leading-[2.38rem] font-medium">Learn More</div>
                </div>
            </div>
            {/* <div className="w-ful">
                <Image src='/images/dog.png' className='absolute top-[5rem] object-cover w-[70%] h-[44rem]' width={400} height={200} alt='dog-img'/>
            </div> */}
        </section>
    )
}

export default Hero