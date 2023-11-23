import React from 'react'
import { Feat } from '../FakeApi'

export const Features = () => {
    return (
        <>
            {
                Feat.map((item, index) => (
                    <div key={index} className='text-center flex flex-col items-center gap-3'>
                        <img src={item.icon} alt='icon'/>
                        <h2 className='text-xl'>{item.title}</h2>
                        <p className='text-sm text-gray-500'>{item.body}</p>
                    </div>
                ))
            }
        </>
    )
}
