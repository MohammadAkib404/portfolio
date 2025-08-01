import React from 'react'

function Home() {
    return (
        <section className='text-white bg-ambient flex justify-center'>
            <div className='bg-tint mt-10 z-10 flex flex-col max-w-6xl h-full justify-center items-center p-10'>
                <h1 className='flex flex-col items-center mb-8'>
                    <strong className='text-8xl font-bold'>Frontend</strong>
                    <strong className='text-8xl bg-gradient-to-r from-sky-400/95 to-sky-300 bg-clip-text text-transparent font-bold'>Developer</strong>
                </h1>
                <strong className='text-4xl text-center font-normal text-gray-300/80 mb-16'>Crafting exceptional digital experiences through innovative design and clean code. Specialized in modern web applications and user interfaces.</strong>
                <div>
                    <button className='bg-sky-400 mr-5 text-black px-15 py-5 font-semibold text-xl rounded-2xl'>View Projects →</button>
                    <button className='px-15 py-5 text-xl font-semibold rounded-2xl border border-sky-400'>Get In Touch</button>
                </div>
            </div>
        </section>
    )
}

export default Home
