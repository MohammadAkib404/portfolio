import React from 'react'

function Home() {
    return (
        <section className='text-white bg-ambient flex flex-col items-center'>
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
            <div className='flex justify-center text-center gap-24 p-8 w-full border-t border-slate-700/70'>
                <div>
                    <h4 className='text-5xl font-bold text-sky-400'>50+</h4>
                    <p className='text-xl text-gray-300/80'>Projects</p>
                </div>
                <div>
                    <h4 className='text-5xl font-bold text-sky-400'>3+</h4>
                    <p className='text-xl text-gray-300/80'>Years Experience</p>
                </div>
                <div>
                    <h4 className='text-5xl font-bold text-sky-400'>24h</h4>
                    <p className='text-xl text-gray-300/80'>Response Time</p>
                </div>
            </div>
        </section>
    )
}

export default Home
