import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-800 text-white'>
            <div className="flex justify-around items-center  px-18 h-[8vh] py-5">
                <div className="logo font-bold text-white text-2xl">
                    <span className="text-green-700">&lt;</span>
                    Pass <span className='text-green-700'>OP</span>
                    <span className="text-green-700">/ &gt;</span>
                </div>
                <button className='text-white bg-green-950  my-5 rounded-full flex justify-between items-center ring-white ring-1 hover:opacity-55'>
                    <img className="invert p-1 w-10" src="/github.png" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
