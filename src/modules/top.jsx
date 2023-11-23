import React from 'react'
import { Link } from 'react-router-dom'
import { Handbag } from '@phosphor-icons/react'
import { TopTarts } from '../FakeApi'

export const Top = () => {
    return (
        <>
            {
                TopTarts.map((item, index) => (
                    <div key={index} className='text-center' >
                        <div className='relative'>
                            <Link to={'/menu/sweets'}>
                                <img src={item.img} alt='top'/>
                                <Handbag className='absolute bottom-5 right-2 hover:bg-[#bea087] bg-[#dcc38b] rounded-full text-white p-3 h-[40px] w-[40px] md:h-[50px] md:w-[50px]' />
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link to={'/menu/sweets'} className='font-semibold obor'>{item.title}</Link>
                            <p className='text-[13px]'>{item.body}</p>
                            <h3>{item.price}<span className='mx-[2px]'>000</span> Сум</h3>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
