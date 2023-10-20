import Image from 'next/image'
import React from 'react'
// import { neue } from 'next/font/google'

// const inter = Josefin_Sans({ subsets: ['latin'] })

const Services = () => {

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
        <section className='container relative top-[40rem]'>
            <div className="py-20">
                <p className="text-[2.88rem] tracking-[0.06em] leading-[2.38rem] font-medium font-neue-montreal text-darkslategray">Our Service</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {services.map(service => (
                        <div className={`ring-1 ring-gray-400 px-6 py-10 rounded-[66px]  ${service.id % 2 === 1 ? 'skew-y-[8deg]' : '-skew-y-[8deg]'}`} key={service.id}>
                            <div className={`rounded-full bg-gold lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem] flex justify-center items-center  -skew-y-[8deg] ${service.id % 2 === 0 && 'skew-y-[7deg]'}`}>
                                <Image className="lg:h-[5rem] lg:w-[5rem] w-[3rem] h-[3rem]  " alt="" src={service.img} width={100} height={100} />
                            </div>
                            <h3 className={`text-[1.63rem] leading-[1.88rem] text-darkslategray -skew-y-[8deg] font-medium pt-6 ${service.id % 2 === 0 && 'skew-y-[7deg]'} `}>{service.title}</h3>
                            <p className={`text-[1.25rem] text-darkslategray  ${service.id % 2 === 0 && 'skew-y-[7deg]'}  -skew-y-[8deg] leading-[1.94rem]`}>{service.content}</p>
                            <button className={` rounded-[190px] box-border w-fit flex items-end py-[0.75rem] px-[2rem] text-left text-[1.25rem] text-darkslategray border-[2px] border-solid border-darkslategray -skew-y-[8deg] ${service.id % 2 === 0 && 'skew-y-[7deg]'}`}>
                                <div className=" tracking-[0.09em] leading-[2.38rem] font-medium ">Explore</div>
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services