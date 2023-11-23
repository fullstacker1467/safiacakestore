import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icons, Jobs, Punto } from '../../FakeApi'

export const Carrier = () => {
    const [vacanse, setVacanse] = useState([{
        title: "ОПЕРАТОР КОНТАКТ-ЦЕНТРА",
        ex: "Без опыта",
        job: "Приём и обработка входящих звонков.",
        needs: "Знание узбекского и русского языков.",
        workTime: "Время работы:c 8:00 до 16:00, 16:00 до 23:00.",
        type: "ОПЕРАТОР",
    }])
    const operator = () => {
        const newData = Jobs.filter(item => item.type === "ОПЕРАТОР")
        setVacanse(newData)
    }
    const finanse = () => {
        const newData = Jobs.filter(item => item.type === "ФИНАНСИСТ")
        setVacanse(newData)
    }
    const casher = () => {
        const newData = Jobs.filter(item => item.type === "КАССИР")
        setVacanse(newData)
    }
    const canditor = () => {
        const newData = Jobs.filter(item => item.type === "КОНДИТЕР")
        setVacanse(newData)
    }
    return (
        <>
            <div className='bg py-10 flex items-center'>
                <div className="container">
                    <div className="flex flex-col items-start rounded-lg bg-white md:w-1/2 gap-5 p-6 md:p-10 relative">
                        <h2 className='text-green-500 absolute right-10'>100+ точек</h2>
                        <h1 className='text-3xl'>Будь в семье</h1>
                        <p className='font-light'>Приятно, граждане, наблюдать, как независимые государства смешаны c не уникальными данными до степени совершённой неузнаваемости, из-за чего возрастает их статус бесполезности. Противоположная точка зрения подразумевает, что сделанные на базе интернет-аналитики выводы могут быть смешаны c не уникальными</p>
                        <Link
                            className="px-5 py-3 rounded-3xl text-white bg-green-500 hover:bg-green-600"
                            to={'/user'}
                        >
                            ВСЕ ВАКАНСИИ
                        </Link>
                    </div>
                </div>
            </div>
            <div className='my-20'>
                <div className="container flex flex-wrap items-center gap-10 md:gap-0">
                    <div className="flex flex-col gap-6 w-full md:w-2/3 md:pr-24">
                        <h1 className='text-2xl md:text-4xl'>МИССИЯ КОМПАНИИ</h1>
                        <p className='text-gray-700 font-light'>Мы любим свое дело! Сохраняя семейные ценности, мы развиваем кондитерское исскуство и делаем жизнь людей праздником</p>
                        <h1 className='text-2xl md:text-4xl'>ИСКУССТВО ДАРИТЬ ВКУС И КАЧЕСТВО ВАШЕМУ ДОМУ</h1>
                        <p className='text-gray-700 font-light'>Приятно, граждане, наблюдать, как независимые государства смешаны c не уникальными данными до степени совершённой неузнаваемости, из-за чего возрастает их статус бесполезности. Противоположная точка зрения подразумевает, что сделанные на базе интернет-аналитики выводы могут быть смешаны c не уникальными</p>
                    </div>
                    <img className='w-1/2 mx-auto md:w-1/3' src="https://careers.safiabakery.uz/img/logo-with-name.png" alt='some'/>
                </div>
            </div>
            <div className="my-20">
                <div className="container text-center">
                    <h1 className='text-2xl md:text-4xl my-20'>НАШИ ЦЕННОСТИ</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {
                            Punto.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <figure className='overflow-hidden rounded-full'>
                                        <img className='hover:scale-110 transition-all' src={item.img} alt='some'/>
                                    </figure>
                                    <div className="flex flex-col">
                                        <h2 className='font-bold'>{item.title}</h2>
                                        <p className='font-light'>{item.body}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="my-20 text-center">
                <h1 className='text-2xl md:text-4xl'>НАШИ ПРЕИМУЩЕСТВА В SAFIA</h1>
                <h2 className='text-xl md:text-2xl my-8'>РАБОТАТЬ В SAFIA ВЫГОДНО</h2>
                <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 py-10">
                    {
                        Icons.map((item, index) => (
                            <div key={index} className='flex flex-col items-center gap-3'>
                                <img src={item.img} alt='some'/>
                                <h1>{item.title}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="my-20">
                <div className="container">
                    <h1 className='text-2xl md:text-4xl'>ВАКАНСИИ</h1>
                    <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col md:w-3/5">
                            <button onClick={operator} className='w-full text-sm border-b-2 text-start py-2 px-2 focus:text-white focus:border-b-0 focus:bg-green-500 border-green-200'>ОПЕРАТОР КОНТАКТ-ЦЕНТРА</button>
                            <button onClick={finanse} className='w-full text-sm border-b-2 text-start py-2 px-2 focus:text-white focus:border-b-0 focus:bg-green-500 border-green-200'>ФИНАНСИСТ</button>
                            <button onClick={casher} className='w-full text-sm border-b-2 text-start py-2 px-2 focus:text-white focus:border-b-0 focus:bg-green-500 border-green-200'>КАССИР В КОНДИТЕРСКИЙ ДОМ САФИЯ</button>
                            <button onClick={canditor} className='w-full text-sm border-b-2 text-start py-2 px-2 focus:text-white focus:border-b-0 focus:bg-green-500 border-green-200'>КОНДИТЕР</button>
                        </div>
                        <div>
                            {
                                vacanse.map((item, index) => (
                                    <div key={index} className='flex flex-col items-start gap-7'>
                                        <h1 className='text-2xl'>{item.title}</h1>
                                        <div>
                                            <h1 className='text-green-500'>Опыт работы</h1>
                                            <h1>{item.ex}</h1>
                                        </div>
                                        <div>
                                            <h1 className='text-green-500'>Обязанности</h1>
                                            <h1>{item.job}</h1>
                                        </div>
                                        <div>
                                            <h1 className='text-green-500'>Требования</h1>
                                            <h1>{item.needs}</h1>
                                        </div>
                                        <div>
                                            <h1 className='text-green-500'>Условия</h1>
                                            <h1>{item.workTime}</h1>
                                        </div>
                                        <Link to={'/user'} className='text-white p-3 bg-green-500 hover:bg-green-600 rounded-full'>
                                            Подать заявку
                                        </Link>
                                    </div> 
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
