import React, { useEffect, useState } from 'react'
import { products } from './List'
import Image from 'next/image'
import { XIcon } from 'lucide-react'
import Button from './Slider/Button'
import Link from 'next/link'
import { useAppContext } from '../context/AppContext'

interface wishlistdetailt {
    id: number,
    image: string,
    name: string,
    price: number,
    odlPrice?: number,
}
export default function WishlistItem({ id }: { id: number }) {
    const [wishlistProduct, setwishlistProduct] = useState<wishlistdetailt>()
    const [show, setShow] = useState(true)
    const { getItem, setItem } = useAppContext()
    useEffect(() => {
        const itemproduct = products.map(item => (item.id === id ? {
            id: item.id,
            image: item.image,
            name: item.name,
            price: item.price,
            odlPrice: item.originalPrice,
        } : null)).filter(Boolean) as wishlistdetailt[]

        setwishlistProduct(itemproduct[0])
    }, [])
    return (
        <>
            {wishlistProduct && show &&
                <div className='w-full  rounded-lg overflow-hidden relative'>
                    <div className='flex absolute right-3 top-3 justify-end cursor-pointer z-20'>
                        <Button onClike={() => {
                            setShow(false)
                            const itemarray = getItem("wishList") || []
                            const updateArray = Array.isArray(itemarray) && itemarray.filter(item => item !== id)
                            setItem("wishList", updateArray)
                        }} className=' bg-white rounded-full p-2 cursor-pointer '>
                            <XIcon className='cursor-pointer ' />
                        </Button>
                    </div>
                    <Link href={`/product/${wishlistProduct.id}`} >
                        <div className='relative w-full h-56'>
                            <Image fill alt=' ' src={wishlistProduct.image} className='object-cover' />
                        </div>
                    </Link>
                    <Link href={`/product/${wishlistProduct.id}`} className='hover:text-main-color duration-300'>{wishlistProduct.name}</Link>
                    <p className='text-black text-lg'>${wishlistProduct.price} {wishlistProduct.odlPrice && <span className='text-gray-400  text-xs'><s>${wishlistProduct.odlPrice}.00</s></span>}</p>
                </div>
            }
        </>
    )
}
