import React from 'react'

const Navbar = () => {
    const navs = [
        {
            id: 1,
            title: 'About'
        },
        {
            id: 2,
            title: 'Service'
        },
        {
            id: 3,
            title: 'Madi-Care'
        },
        {
            id: 4,
            title: 'Blog'
        },
    ]
    return (
        <div className=' bg-transparent flex justify-between items-center py-5 container'>
            <p className=" text-[1.31rem] tracking-[0.01em] leading-[2.38rem] font-semibold text-darkslategray ">Pet-First</p>
            <nav className="text-[0.88rem] lg:flex gap-8 hidden">
                {navs.map(nav => (
                    <div className="" key={nav.id}>
                        <p className="leading-[2.38rem] tracking-[0.01em] ">{nav.title}</p>
                    </div>
                ))}
            </nav>
            {/* <div className=" rounded-[190px] w-full py-[0.75rem] px-[2rem] text-[1.25rem] text-white border-[2px] border-solid border-white"> */}
                <button className="hidden lg:flex rounded-[190px] py-[0.5rem] px-[2rem] text-[1.25rem] text-whit border-[2px] border-solid border-white tracking-[0.09em] leading-[2.38rem] font-medium">Sign up</button>
            {/* </div> */}
        </div>
    )
}

export default Navbar