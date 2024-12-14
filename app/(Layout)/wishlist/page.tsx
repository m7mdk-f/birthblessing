"use client"
import MtionInViewSec from '@/app/components/MtionInViewSec'
import WishlistItem from '@/app/components/WishlistItem'
import { useAppContext } from '@/app/context/AppContext'
import React, { useEffect, useState } from 'react'

const page = () => {
    const { getItem, setItem } = useAppContext()
    const [wishlist, setWishlist] = useState<number[]>([])
    useEffect(() => {
        if (window !== undefined) {
            setWishlist(getItem('wishList') || [])
        }
    }, [])

    return (
        <MtionInViewSec delay={1} className='container'>
            {wishlist.length > 0 ?
                <div>
                    <h1 className="text-xl lg:text-4xl font-bold my-10">My Wishlist</h1>
                    <div className='grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5  '>
                        {wishlist.map((item) => {
                            return <WishlistItem key={item} id={item} />
                        })}
                    </div>
                </div>
                : <div>
                    <h1 className="text-xl lg:text-4xl font-bold my-10 text-center">Your wishlist is currently empty!</h1>
                </div>
            }
        </MtionInViewSec>
    )
}

export default page