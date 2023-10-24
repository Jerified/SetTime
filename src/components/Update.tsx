import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Update = () => {
  return (
    <section className="relative top-[10rem">
      <div className="grid grid-cols-1 lg:grid-cols-2 containe pt-12 lg:pt-[8rem]  h-[23.5rem]">
        <div className=" bg-gold lg:pl-[8rem] container relative hidden lg:flex justify-center items-center">
          <Image src='/images/doggybg.png' className=' w-full lg:w-[34.38rem]' alt='' width={200} height={200} />
          <Image src='/images/doggy.png' className='absolute top-[-3.5rem] mx-auto w-[25.44rem] h-[22rem] object-cover' alt='' width={300} height={300} />
        </div>
        <div className="bg-orangered lg:pl-16 container py-12">
          <div className=" relative lg:pr-[8rem]">
            <p className="leading-[3.75rem] font-semibold text-[2.88rem] pb-10">Subscribe & Get Pet Updatenews</p>
            <div className=" relative">
              <input type="text" className="w-full bg-inherit border-b border-white placeholder:tracking-[0.01em] placeholder:leading-[1.75rem] placeholder:text-antiquewhite text-[1.63rem] text-antiquewhite outline-none" placeholder='Mail'  />
              <div className="absolute right-0 top-2">
                <BsArrowRight className='text-white text-2xl' />
              </div>
            </div>
            <Image src='/images/newscoil.png' className='lg:absolute right-0 top-0 w-0 lg:w-[7rem] lg:h-[10.19rem]' alt='' width={200} height={200} />
          </div>
        </div>
      </div>
    </section>
//     <div className="relative w-full h-[23.81rem] text-left text-[2.88rem] text-darkslategray font-josefin-sans">
// <div className="absolute top-[3.56rem] left-[0rem] bg-orangered w-[90.13rem] h-[20.25rem]" />
// <div className="absolute top-[6.81rem] left-[50.13rem] leading-[3.75rem] font-semibold flex items-end w-[33.94rem]">{`Subscribe & Get Pet Updatenews`}</div>
// <div className="absolute top-[3.56rem] left-[0rem] bg-gold w-[46.06rem] h-[20.25rem]" />
// <img className="absolute top-[10.56rem] left-[8.5rem] w-[34.38rem] h-[10.19rem] overflow-hidden" alt="" src="Frame.svg" />
// <img className="absolute top-[0rem] left-[16.38rem] w-[25.44rem] h-[23.81rem] object-cover" alt="" src=" 89253.png" />
// <div className="absolute top-[17.5rem] left-[50.06rem] w-[29.63rem] h-[2.81rem] text-[1.63rem] text-white font-neue-montreal">
// <div className="absolute top-[2.78rem] left-[0.05rem] box-border w-[29.61rem] h-[0.06rem] border-t-[1px] border-solid border-white" />
// <img className="absolute top-[0.67rem] left-[27.48rem] w-[2.06rem] h-[0.92rem]" alt="" src="Arrow 4.svg" />
// <div className="absolute w-[24.66%] top-[0%] left-[0%] tracking-[0.01em] leading-[1.75rem] inline-block">Mail</div>
// </div>
// <img className="absolute h-[48.7%] w-[9.39%] top-[29.98%] right-[3.64%] bottom-[21.32%] left-[86.98%] max-w-full overflow-hidden max-h-full" alt="" src="Group.svg" />
// </div>
  )
}

export default Update