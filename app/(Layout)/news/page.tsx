"use client"
import { NewsList } from '@/app/components/List'
import MtionInViewSec from '@/app/components/MtionInViewSec'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegComments, FaRegUser } from 'react-icons/fa'
import { MdOutlineCalendarMonth } from 'react-icons/md'

function page() {
    return (
        <MtionInViewSec delay={1} className='py-7'>
            <h1 className="text-xl lg:text-4xl font-bold mb-10 text-center capitalize">News</h1>

            <section className="container  grid grid-cols-1 md:grid-cols-2 gap-14">
                {NewsList.map((item, index) => {
                    return <div key={index} className="text-center">
                        <Link href={`/newsdetails/${item.id}`} >
                            <div className='relative h-[50vh] rounded-2xl overflow-hidden w-full '>

                                <Image fill className="rounded-10 object-cover" src={item.image} alt="" />
                            </div>
                        </Link>
                        <div className='flex flex-col gap-2'>
                            <Link href="/collections" className="my-3 text-lg md:text-xl font-bold">
                                {item.title}
                            </Link>
                            <p className="mb-4 text-sm text-gray-600 line-clamp-3">{item.desc} </p>
                            <div className='flex  justify-center items-center'>
                                <div className='flex flex-wrap gap-3'>

                                    <div className="flex gap-0.5  justify-center items-center">
                                        <MdOutlineCalendarMonth className="w-5 h-5 text-gray-600 " />
                                        <p>Feb 08, 2022</p>
                                    </div>
                                    <div className="flex gap-0.5">
                                        <FaRegUser className="w-4 h-4 text-gray-600 mt-0.5" />
                                        <p>Romit Gabani</p>
                                    </div>
                                    <div className="flex gap-0.5">
                                        <FaRegComments className="w-4 h-4 text-gray-600 mt-0.5" />
                                        <p className="text-ssc lg:text-sm">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}

            </section>
        </MtionInViewSec>
    )
}

export default page