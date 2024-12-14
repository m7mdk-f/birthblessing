"use client"
import { listCollections } from '@/app/components/List'
import MtionInViewSec from '@/app/components/MtionInViewSec'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function page() {
  return (
    <MtionInViewSec delay={1}>
      <h1 className="text-xl lg:text-4xl font-bold my-10 text-center capitalize">collections</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 pt-10 sm:grid-cols-2 grid-cols-1 gap-7 container'>
        {listCollections.map((item, index) => (
          <Link href={`/collections/${item.text}`} key={index} className='group'>
            <div className='w-full h-60 relative rounded-lg overflow-hidden '>
              <Image fill src={item.image} className='object-cover' alt='' />
            </div>
            <div className='flex gap-2 justify-center  items-center'>
              <h1 className='text-xl m-2 '>{item.text}</h1>
              <div className='group-hover:ml-2 duration-500'><FaArrowRight /></div>
            </div>
          </Link>
        ))}
      </div>
    </MtionInViewSec>

  )
}

export default page