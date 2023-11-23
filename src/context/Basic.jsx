import React, { createContext } from 'react'
import { useState } from 'react';

export const saveCart = createContext([])

export const Basic = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);
    const [tovar, setTovar] = useState([]);

    return (
        <saveCart.Provider value={{ data, setData, cart, setCart, tovar, setTovar}}>{children}</saveCart.Provider>
    )
}
