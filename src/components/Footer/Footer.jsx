import { FacebookLogo, InstagramLogo, TelegramLogo } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='bg-[#2c1e1e] pt-12 mb-[70px] md:mb-0  text-slate-200'>
      <div className="container py-7 grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link to={'/'}>
          <img className='w-1/2 mx-auto' src="https://safiabakery.uz/img/logo.svg?v=1" alt='logo' />
        </Link>
        <div className="flex flex-col gap-3">
          <h1 className='text-2xl'>O компании</h1>
          <Link className='text-sm hover:text-yellow-200'>Меню</Link>
          <Link className='text-sm hover:text-yellow-200'>O нас</Link>
          <Link className='text-sm hover:text-yellow-200'>Карьера</Link>
          <Link className='text-sm hover:text-yellow-200'>Кейтеринг</Link>
          <Link className='text-sm hover:text-yellow-200'>Новости</Link>
          <Link className='text-sm hover:text-yellow-200'>Публичная оферта</Link>
          <Link className='text-sm hover:text-yellow-200'>Контакты</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className='text-2xl'>Каталог</h1>
          <Link className='text-sm hover:text-yellow-200'>зa вкусненьким сюда</Link>
          <Link className='text-sm hover:text-yellow-200'>Десерты правильного питания</Link>
          <Link className='text-sm hover:text-yellow-200'>Полуфабрикаты</Link>
          <Link className='text-sm hover:text-yellow-200'>Барное меню</Link>
          <Link className='text-sm hover:text-yellow-200'>Свечки и фейерверки</Link>
          <Link className='text-sm hover:text-yellow-200'>Доставка аниматором</Link>
          <Link className='text-sm hover:text-yellow-200'>Safia Store</Link>
        </div>
        <div className="flex flex-col md:items-end gap-4">
          <h1 className='text-2xl'>Контакты</h1>
          <Link className='obor'>78 113 40 40</Link>
          <div className="flex gap-3">
            <InstagramLogo className='text-3xl hover:text-yellow-200' />
            <FacebookLogo className='text-3xl hover:text-yellow-200' />
            <TelegramLogo className='text-3xl hover:text-yellow-200' />
          </div>
          <div className="flex gap-2">
            <Link>
              <img className='w-[130px]' src="https://safiabakery.uz/img/gp.svg" alt='logo' />
            </Link>
            <Link>
              <img className='w-[130px]' src="https://safiabakery.uz/img/as.svg" alt='logo' />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-slate-200 h-[80px] md:h-[60px] py-2">
        <div className="container h-[100%] flex flex-wrap gap-2 md:gap-0 items-center justify-between">
          <h1 className='text-sm w-full md:w-1/2 text-center md:text-start'>2023 Safia Cafe & Bakery. Все права защищены.</h1>
          <h1 className='text-sm w-full md:w-1/2 text-center md:text-end'>Site Had Been Made By Suhrob</h1>
        </div>
      </div>
    </footer>
  )
}
