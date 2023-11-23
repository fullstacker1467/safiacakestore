import React from 'react'
import "./Home.scss"
import { NewProduct } from '../../modules/newproduct'
import { Top } from '../../modules/top'
import { Features } from '../../modules/features'
import { Link } from 'react-router-dom'
import { Novosti } from '../../modules/novosti'
import { Header } from '../../components/Header/Header'
import { Tort } from '../../modules/tort'

export const Home = () => {
    return (
        <>
            <Header />
            <div className='py-14'>
                <div className="container">
                    <h1 className="text-center text-3xl">НОВИНКИ</h1>
                    <div className="flex">
                        <NewProduct />
                    </div>
                </div>
            </div>
            <h1 className="text-center text-3xl my-10">ТОРТЫ</h1>
            <div className="py-14 bg-[#bea087]">
                <div className="container">
                    <Tort />
                </div>
            </div>
            <div className="py-8">
                <div className="container">
                    <h1 className="text-center text-3xl my-5">ТОП ПРОДАЖ</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <Top />
                    </div>
                </div>
            </div>
            <div className='py-14'>
                <div className="container">
                    <h1 className="text-center text-3xl my-10">НАШИ ЦЕННОСТИ</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <Features />
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="container">
                    <h1 className="text-center text-4xl my-8">o нас</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-5">
                        <img className='w-full rounded-lg' src="https://safiabakery.uz/uploads/pages/page_1669812086.png" alt='some' />
                        <div className='relative flex flex-col justify-between md:px-20'>
                            <h1 className='text-3xl'>Наша История</h1>
                            <p className='my-4 font-light text-slate-700'>Сеть кондитерских Safia - семейное предприятие, история которого начинается c кондитера-любителя Мухаё Аюповой. Большое трудолюбие и любовь к домашней выпечке побудили ee в 2001 году выйти за рамки семейной кухни и начать печь на продажу, сперва - для родственников, друзей и соседей. Супруг, Акмаль Аюпов, поддерживает творческое начинание Мухаё и организует доставку готовых изделий.</p>
                            <div className="flex items-center justify-center md:justify-end">
                                <Link to={'/about'} className='block md:absolute md:left-[-83px] md:top-[130px] border-8 border-white hover:bg-[#bea087] bg-[#dcc38b] text-white px-2 py-11 rounded-full'>
                                    Подробнее
                                </Link>
                                <img className='w-[150px]' src="https://safiabakery.uz/img/sign-in.png" alt='some' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-14">
                <div className="container">
                    <h1 className="text-center text-4xl my-8">НОВОСТИ</h1>
                    <Novosti />
                </div>
            </div>
        </>
    )
}
