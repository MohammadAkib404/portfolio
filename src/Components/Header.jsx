import React from 'react'
import { Heart } from 'lucide-react'

function Header() {
    return (
        <header className='fixed w-full px-16 py-6 text-xl flex justify-between  text-gray-300/80'>
            <div className='flex gap-4 items-center'>
                <div className='h-10 w-10 rounded-xl bg-sky-400 flex justify-center items-center'>
                    <p className='w-5 h-5 rounded-full bg-black'></p>
                </div>
                <h3 className='text-white font-bold text-2xl'>Md Akib</h3>
            </div>
            <div>
                <ul className='flex gap-8'>
                    <li>Project</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex gap-8'>
                <button>Resume</button>
                <button>Hire Me</button>
            </div>
        </header>
    )
}

export default Header
