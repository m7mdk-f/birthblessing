"use client"
import React, { ReactNode, useState } from 'react'
import CartPopup from './CartPopup'
import Cart from './Cart'
import { useAppContext } from '../context/AppContext'
import { usePathname } from 'next/navigation'

function CartContainer() {

    const { stateCart } = useAppContext()
    const pathname = usePathname()
    return (
        <div className='relative z-50'>
            {pathname == '/shoppingcart' ? <Cart /> : stateCart() ? <CartPopup /> : <Cart />}
        </div>
    )
}

export default CartContainer