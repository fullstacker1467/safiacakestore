import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
      <>
          <div className='py-20'>
              <div className="container flex flex-col items-center justify-center gap-6">
                  <h1 className='text-3xl md:text-6xl'>Ой, кажется я что-то понажимала…</h1>
                  <img src="https://safiabakery.uz/img/404.png" alt='some'/>
                  <h1>Пока я тут разбираюсь c ошибкой, по номеру <b>78 113 40 40</b> вам помогут.</h1>
                  <Link to={'/'} className='obor text-2xl'>HA ГЛАВНУЮ</Link>
              </div>              
        </div>
      </>
  )
}
