import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className="flex justify-around items-center text-3xl py-3 h-fit shadow-lg shadow-gray-200">
        <div className="logo">
<span className='text-green-600'>&lt;</span>Pass<span className='text-green-600'>Fort/&gt;</span>

        </div>
        <div className="lists">
            <ul className='flex gap-4 text-xl font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar
