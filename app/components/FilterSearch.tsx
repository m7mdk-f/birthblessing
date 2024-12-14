"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { products } from './List'
import { GrFormNextLink } from 'react-icons/gr'

function FilterSearch({ value, className, onClick }: { value: string, className?: string, onClick?: () => void }) {
    const [filter, setFilter] = useState<any[]>([])
    useEffect(() => {
        const r = setTimeout(() => {
            setFilter(products.filter(item => item.name.toLowerCase().includes(value.toLowerCase().trim())))
        }, 500)
        return () => clearTimeout(r)
    }, [value])
    useEffect(() => {
        console.log(filter)
    }, [filter])
    return (
        <div className={`${className || ""} relative bg-white z-10`}>
            <div className='w-[98%] mx-auto'>
                <div className="flex absolute top-0 bg-white left-0  flex-col gap-3  p-4 rounded-lg shadow-lg w-full">
                    {filter.length !== 0 && <h1 className='text-base'>Prodect</h1>}
                    <div className='flex flex-col gap-3 max-h-[40vh] overflow-y-auto'>
                        {filter.map((item, index) => {
                            return <Link onClick={onClick ? () => onClick() : undefined} href={`/product/${item.id}`} key={index} className=' flex gap-4 cursor-pointer'>
                                <div className='relative h-20 w-20 rounded-md overflow-hidden'>
                                    <Image
                                        fill
                                        src={item.image}
                                        alt=''
                                        className="object-cover "
                                    />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div className=''>
                                        <h2 className=" font-semibold text-gray-600 text-base">${item.name}</h2>
                                        <div className='flex gap-1'>
                                            <h1 className='text-lg font-semibold'>{item.price}</h1>
                                            {item.originalPrice && <h1 className='text-gray-600 text-sm mt-1'><s> ${item.originalPrice}</s></h1>}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        })}
                    </div>

                    <div className='flex justify-between'>
                        <h1>Search for "{value}"</h1>
                        <GrFormNextLink className='w-7 h-7' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSearch