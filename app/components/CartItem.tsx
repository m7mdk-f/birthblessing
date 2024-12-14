"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useAppContext } from '../context/AppContext';

interface Productcart {
    id: number,
    image: string,
    name: string,
    count: number,
    price: number,
    oldPrice?: number,
}
interface CartItemProps {
    product: Productcart;
}
interface Getcart {
    id: number,
    number: number
}

function CartItem({ product }: CartItemProps) {

    const { getItem, setItem, activeCart } = useAppContext()
    const [cart, setCart] = useState<Getcart[]>([])
    const [show, setShow] = useState(true)

    useEffect(() => {
        if (window !== undefined) {
            setCart(getItem("Cart") || [])
        }
    }, [getItem])
    const removeProduct = (id: number) => {
        const update = cart.filter(item => item.id !== id)
        setItem("Cart", update)
        if (update.length == 0) {
            setShow(false)
        }

    }
    const handleIncrease = (id: number, delay: number) => {
        const update = cart.map(item => (
            item.id === id ? { ...item, number: Math.max(1, item.number + delay) } : item
        ))
        setItem("Cart", update)
    }
    return (
        <>
            {show && <div className="flex contButton items-center justify-between py-4 border-b">
                <div className="flex  md:w-[70%] justify-between  md:items-center h-full">
                    <div className=' flex w-full  '>
                        <div className="md:w-32 w-[50%] h-[50%]  md:h-28 border  relative rounded-lg bg-black">
                            <Image fill alt=' ' src={product.image} className='object-cover' />
                        </div>
                        <div className='flex md:flex-row flex-col w-full'>
                            <div className="ml-4 flex flex-col gap-1">
                                <p className="md:text-lg text-sm font-semibold text-gray-800">{product.name}</p>
                                <p className='text-black text-2xl'>${product.price} {product.oldPrice && <span className='ml-2 text-sm text-gray-400'><s>${product.oldPrice}</s></span>}</p>
                                <p className="text-xl text-black">Musical15 </p>
                            </div>
                            <div className="flex md:ml-auto  items-center ">
                                <div className='flex gap-2 justify-center items-center border px-2 py-1 rounded-md '>
                                    <button
                                        onClick={() => handleIncrease(product.id, -1)}
                                        className=" p-2  rounded-md"
                                    >
                                        <BiMinus />
                                    </button>
                                    <span className="text-lg font-semibold mt-0.5">{product.count}</span>

                                    <button
                                        onClick={() => handleIncrease(product.id, 1)}
                                        className=" p-2 rounded-md"
                                    >
                                        <BiPlus />
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeProduct(product.id)}
                                    className="text-gray-800 p-2 rounded-md">
                                    <RiDeleteBin6Line className='w-5 h-5' />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='md:w-[10%] items-end '>
                    <div className='text-right'>
                        <p className="text-lg font-semibold text-gray-800">
                            ${product.count * product.price}
                        </p>
                        <p className='text-gray-400 '><s>${product.oldPrice && product.count * product.oldPrice}</s></p>
                    </div>
                </div>

            </div >}
        </>
    );
};

export default CartItem;
