import React from 'react'
import { Link } from 'react-router-dom'
import { Handbag } from '@phosphor-icons/react'
import { Storejon } from '../../FakeApi'

export const Store = () => {
  return (
    <>
      <div className="h-[100px]">
        <div className="container h-full flex items-center gap-3">
          <Link to={'/'}>Главная</Link>
          <span className='text-[#bea087]'>/</span>
          <Link className='font-light'>Safia Store</Link>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#bea087] py-5">
        <h1 className='text-3xl text-white'>Safia Store</h1>
      </div>
      <div className='py-20'>
        <div className="container flex flex-wrap justify-center md:gap-10 md:justify-start items-center">
          {
            Storejon.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 w-full md:w-1/3 lg:w-1/5">
                <div className='relative'>
                  <img className='rounded-full w-full' src={item.img} alt="paket" />
                  <Link>
                    <Handbag className='absolute bottom-5 right-2 text-white hover:bg-[#bea087] bg-[#dcc38b] rounded-full p-3 h-[40px] w-[40px] md:h-[50px] md:w-[50px]' /></Link>
                </div>
                <div className="flex flex-col gap-4">
                  <Link className=''>{item.name}</Link>
                  <h1>{item.soni}</h1>
                  <h1>{item.price} сум</h1>
               </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
