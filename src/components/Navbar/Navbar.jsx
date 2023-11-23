import { CirclesFour, Handbag, House, List, MagnifyingGlass, UserCircle, X } from '@phosphor-icons/react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { NavLinks } from '../../FakeApi'
import { saveCart } from '../../context/Basic'


export const Navbar = () => {
    const Card = useContext(saveCart)
    const [navactive, setNavactive] = useState(true)
    function bodyNoScroll() {
        document.body.style.overflowY = navactive ? 'hidden' : 'scroll'
    }
    const navOpen = () => {
        setNavactive(!navactive)
        if (document.body.clientWidth < 1020) {
            bodyNoScroll()
        }
    }

    return (
        <>
            <header className='sticky left-0 top-0 bg-black text-white h-[70px]'>
                <div className="container h-full flex items-center justify-between">
                    <Link to="/">
                        <img className='w-[50px]' src="https://careers.safiabakery.uz/img/logo.svg" alt="Logo" />
                    </Link>
                    <div className={`${navactive ? 'active' : null} menu flex gap-5 `}>
                        {
                            NavLinks.map((item, index) => (
                                <Link onClick={navOpen} key={index} to={item.to} className='md:hover:text-yellow-100'>{item.title}</Link>
                            ))
                        }
                    </div>
                    <div className="ong flex gap-2 md:gap-5 text-2xl">
                        <Link to={'/poisk'} className='hover:text-yellow-100'><MagnifyingGlass /></Link>
                        <Link to={'/user'} className='hover:text-yellow-100 user'><UserCircle /></Link>
                        <Link to={'/basket'} className='hover:text-yellow-100 korzina relative'><Handbag />
                            <span className={`${Card.cart.length <= 0 ? "hidden" : "flex"} text-white rounded-full justify-center items-center absolute h-[15px] w-[15px] bg-[#bea087] top-[-5px] right-[-5px]`}>
                                <span className='text-[10px]'>{Card.cart.length}</span>
                            </span>
                        </Link>
                        <Link onClick={navOpen} className={`hover:text-yellow-100 humb`}>{navactive ? <List /> : <X />}</Link>
                    </div>
                </div>
            </header>
            <div className={`${navactive ? 'active' : null} pasbar pb-3 flex justify-around items-center text-2xl fixed bg-black text-white bottom-0 w-full h-[70px]`}>
                <Link to={'/'} className='hover:text-yellow-100 relative'><House />
                    <span className='absolute left-[-8.5px] text-[10px] bottom-[-22px]'>Главная</span>
                </Link>
                <Link to={'/menu/sweets'} className='hover:text-yellow-100 relative'><CirclesFour />
                    <span className='absolute left-[-4.5px] text-[10px] bottom-[-22px]'>Меню</span>
                </Link>
                <Link to={'/basket'} className='hover:text-yellow-100 relative'>
                    <Handbag />
                    <span className='absolute left-[-10px] text-[10px] bottom-[-22px]'>Корзина</span>
                    <span className={`${Card.cart.length <= 0 ? "hidden" : "flex"} text-white rounded-full justify-center items-center absolute h-[15px] w-[15px] bg-[#bea087] top-[-5px] right-[-5px]`}>
                        <span className='text-[10px]'>{Card.cart.length}</span>
                    </span>
                </Link>
                <Link to={'/user'} className='hover:text-yellow-100 relative'><UserCircle />
                    <span className='absolute left-[-11.5px] text-[10px] bottom-[-22px]'>Профиль</span>
                </Link>
            </div>
        </>

    )
}
