'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const menuVariants = {
        initial: {
            scaleY: 0
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 0, 0.36, 1]
            }
        }
    }



    const containerVariants = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1
            }
        }
    }
    const navs = [
        {
            id: 1,
            title: 'About',
            image: '/images/leaf.png'
        },
        {
            id: 2,
            title: 'Service',
            image: '/images/leaf.png'
        },
        {
            id: 3,
            title: 'Madi-Care',
            image: '/images/leaf.png'
        },
        {
            id: 4,
            title: 'Blog',
            image: '/images/leaf.png'
        },
    ]
    const [open, setOpen] = useState(false);
    const [showImage, setShowImage] = useState(false)
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    let id: any

    function setShowImg(show: any) {
        clearInterval(id)
        
        id = setInterval (() => {
            if (show) {

            }
        })
    }
    return (
        <div className=' bg-transparent flex justify-between items-center py-5 container lg:px-[8rem]'>
            <p className=" text-[1.31rem] tracking-[0.01em] leading-[2.38rem] font-semibold text-darkslategray ">Pet-First</p>
            <nav className="text-[0.88rem] lg:flex gap-8 hidden">
                {navs.map(nav => (
                    <div className="group relative w-ful" key={nav.id} >
                        <p className="leading-[2.38rem] tracking-[0.01em] cursor-pointer text-darkslategray hover:text-antiquewhit"  
                        >{nav.title}</p>
                        <Image src={nav.image} className='absolute z-[-10] group-hover:w-[15rem]  h-[2rem top-[1rem] opacity-0 group-hover:opacity-100' width={200} height={200} alt='' />
                    </div>
                ))}
                 {/* {showImage && (
                            <Image src='/images/leaf.png' width={50} height={50} alt='' />
                        )} */}
            </nav>
            {/* <Image src='/images/leaf.png' className='w-full  h-[5rem]' width={200} height={200} alt='' /> */}
            <div
                className="w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl cursor-pointer overflow-hidden group "
                onClick={toggleMenu}
            >
                <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-2 transition-all ease-out duration-300 bg-darkslategray" />
                <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-0 transition-all ease-out duration-300 bg-darkslategray translate-x-3" />
                <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-3 transition-all ease-out duration-300 bg-darkslategray translate-x-1" />
            </div>
            {/* <div className=" rounded-[190px] w-full py-[0.75rem] px-[2rem] text-[1.25rem] text-white border-[2px] border-solid border-white"> */}
            <button className="hidden lg:flex rounded-[190px] py-[0.5rem] px-[2rem] text-[1.25rem] text-whit border-[2px] border-solid border-white tracking-[0.09em] leading-[2.38rem] font-medium hover:bg-darkslategray hover:transition hover:duration-300 hover:text-antiquewhite ease-in-out cursor-pointer">Sign up</button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed z-50 left-0 top-0 w-full h-[100dvh] origin-top bg-orange-500 text-black p-10"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex justify-between">
                            <p className=" text-[1.31rem] tracking-[0.01em] leading-[2.38rem] font-semibold text-darkslategray ">Pet-First</p>
                                <p
                                    className="cursor-pointer text-md text-black"
                                    onClick={toggleMenu}
                                >
                                    Close
                                </p>
                            </div>
                            <motion.div
                                variants={containerVariants}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col h-full justify-center items-center gap-7 "
                            >
                                {navs.map((link, index) => {
                                    return (
                                        <div key={index} className="overflow-hidden">
                                            <MobileNavLink
                                                title={link.title}
                                            />
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* </div> */}
        </div>
    )
}

const MobileNavLink = ({ title }: any) => {
    const mobileVariants = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1]
            }
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1]
            }
        }
    }
    return (
        <motion.div
            variants={mobileVariants}
            className="text-2xl uppercase text-black"
        >
            <Link href=''>{title}</Link>
        </motion.div>
    );
};

export default Navbar

