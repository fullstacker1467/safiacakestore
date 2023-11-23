import React from 'react'
import { About } from '../../FakeApi'
import { Link } from 'react-router-dom'

export const AboutPage = () => {
    return (
        <>
            <div className='my-20 md:my-32'>
                <div className="container flex flex-col gap-20">
                    {
                        About.map((item, index) => (
                            <div key={index} className='flex odd flex-wrap items-center gap-5 md:gap-0'>
                                <div className='w-full md:w-1/3 relative'>
                                    <img className='rounded-full' src={item.img} alt='img'/>
                                    <span className='absolute left-5 text-white top-12 border-8 border-white bg-[#dcc38b] text-4xl px-6 py-3 rounded-full'>{item.id}</span>
                                </div>
                                <div className="flex flex-col items-start justify-center gap-7 w-full md:w-2/3">
                                    <h1 className='text-xl'>{item.title}</h1>
                                    <p className='text-sm'>{item.body}</p>
                                    <Link
                                        className="px-5 py-3 rounded-3xl text-white hover:bg-[#bea087] bg-[#dcc38b]"
                                        to={item.link}
                                    >
                                        подробнее
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
