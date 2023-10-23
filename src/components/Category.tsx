import React from 'react'
import Image from 'next/image'

const Category = () => {
    const pets = [
        {
            id: 1,
            img: '/images/pets/pet4.png'
        },
        {
            id: 2,
            img: '/images/pets/pet5.png'
        },
        {
            id: 3,
            img: '/images/pets/pet6.png'
        },
        {
            id: 4,
            img: '/images/pets/pet7.png'
        },
        {
            id: 5,
            img: '/images/pets/pet8.png'
        }
    ]

    const pets2 = [
        {
            id: 6,
            img: '/images/pets/pet9.png'
        },
        {
            id: 7,
            img: '/images/pets/pet10.png'
        },
        {
            id: 8,
            img: '/images/pets/pet11.png'
        },
        {
            id: 9,
            img: '/images/pets/pet12.png'
        },
        {
            id: 10,
            img: '/images/pets/pet13.png'
        },
    ]
    return (
        <section className=" bg-orangered w-full h-[20rem]  bottom-0 mt-20">
            <div className="grid flex-row place-items-center lg:px-[8rem] lg:pr-0 h-full relative">
                <Image className="absolute top-[1.5rem] pt- left-[0rem] w-[5rem] md:w-[8rem] h-[5rem] md:h-[9rem] overflow-hidden" alt="" src='/images/Frame.png' width={60} height={60} />
                <div className="lg:flex-row w-full flex flex-col-reverse items-center  lg:pl-[-2rem">
                    <div className="w-full justify-cente  flex ">
                        <Image className="lg:max-w-full" alt="" src='/images/45+.png' width={200} height={200} />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <div className="flex gap-3">
                            {pets.map((pet, idx) => (
                                <React.Fragment key={pet.id}>
                                    <div className={`w-full`} >
                                        <Image className="lg:w-[12rem] w-[6rem]" alt="" src={pet.img} width={200} height={200} />
                                        {/* {pet.id === 5 && <br />} */}
                                    </div>

                                </React.Fragment>
                            ))}
                            </div>
                            <div className="flex gap-3">
                                {pets.map((pet, idx) => (
                                    <React.Fragment key={pet.id}>
                                        <div className={`w-full`} >
                                            <Image className="lg:w-[12rem] w-[6rem]" alt="" src={pet.img} width={200} height={200} />
                                            {/* {pet.id === 5 && <br />} */}
                                        </div>

                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
        </section>
    )
}

export default Category