"use client"
import CartItem from '@/app/components/CartItem';
import { products } from '@/app/components/List';
import { useAppContext } from '@/app/context/AppContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

interface Productcart {
    id: number,
    image: string,
    name: string,
    count: number,
    price: number,
    oldPrice?: number,
    color: string
}

interface Getcart {
    id: number,
    number: number
}
function page() {
    // const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const { getItem } = useAppContext()
    const [cart, setCart] = useState<Getcart[]>([])
    const [productshow, setProductShow] = useState<Productcart[]>([])
    const i = useRef(0)

    useEffect(() => {
        setCart(getItem("Cart") || [])
    }, [getItem])

    useEffect(() => {
        if (!cart.length) {
            return
        }
        var arrayProduct = cart.map(item => {
            const product = products.find(pro => pro.id == item.id)
            if (product) {
                return {
                    id: product.id,
                    image: product.image,
                    name: product.name,
                    count: item.number,
                    price: product.price,
                    oldPrice: product.originalPrice,
                }
            }
            else return null
        }).filter(Boolean) as Productcart[]
        setProductShow(arrayProduct)

    }, [cart])

    const calculateSubtotal = () => {
        if (cart.length == 0) {
            return 0
        }
        return productshow.reduce((total, item) => total + item.price * item.count, 0);
    };


    return (
        <div className="container mx-auto flex flex-col  py-20">
            {/* Cart Header */}
            <div className="flex justify-between items-center  mb-4">
                <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">Your Cart</h2>
                <Link href="/collections/products" className="text-sm text-main-color underline">Continue shopping</Link>
            </div>
            {productshow.length === 0 ?
                <div className='flex mt-5 justify-center items-center'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-bold'>Your cart is empty</h1>
                        <Link href="/collections/products" className='p-2 text-center text-sm text-white bg-main-color hover:bg-black duration-300 rounded-lg'>
                            Continue shopping
                        </Link>
                    </div>
                </div>
                :
                (<div className='w-full flex flex-col'>
                    <div className='uppercase border-b pb-4 text-gray-700 flex justify-between'>
                        <h1 className='md:w-[55%] '>Product</h1>
                        <div className='md:w-[45%] flex justify-between'>
                            <h1 className='md:block hidden'>Quantity</h1>
                            <h1 >Total</h1>

                        </div>
                    </div>
                    {productshow.map((item, index) => {
                        return <CartItem key={index} product={item} />
                    })}
                    <div className="flex min-w-[26%] self-end gap-2  flex-col text-right pt-4">
                        <h1 className='text-lg'>Subtotal : <span className='text-2xl font-bold ml-2 mb-1'>${calculateSubtotal()}</span></h1>
                        <h1 className=' text-base'>Tax included and shipping calculated at checkout</h1>
                        <button className="bg-main-color text-white py-2 w-full rounded-md hover:bg-black transition duration-300">
                            Check Out
                        </button>
                    </div>
                </div>)}
        </div>

    );
}

export default page