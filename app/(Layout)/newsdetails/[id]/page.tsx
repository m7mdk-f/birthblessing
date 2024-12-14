"use client"
import CommentForm from '@/app/components/CommentForm'
import { NewsList } from '@/app/components/List'
import Button from '@/app/components/Slider/Button'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useMemo } from 'react'
import { GrFormPreviousLink } from 'react-icons/gr'
import { TbPointFilled } from 'react-icons/tb'

function page() {
    const { id } = useParams()
    const item = useMemo(() => {
        if (id)
            return NewsList.filter(item => item.id == parseInt(id.toString().trim()))[0]
        else null
    }, [id])
    return (
        <>
            {item ?
                <div className=" md:w-[70%] mx-auto container bg-whiteflex items-center justify-center">
                    <h1 className="text-xl lg:text-4xl font-medium mb-10 text-center capitalize mt-5">{item.title}</h1>
                    <div className='flex justify-center items-center mb-3'>
                        <div className='flex gap-2 text-gray-400 text-sm'>
                            <h1>February 8, 2022 </h1>
                            <h1 className='mt-1'><TbPointFilled /></h1>
                            <h1>Romit Gabani</h1>
                        </div>
                    </div>
                    <div className='relative  w-full h-[85vh]'>
                        <Image fill alt='' src={item.image} className='object-cover' />
                    </div>
                    <p className='text-gray-400'>{item.desc}</p>
                    <Button link='/news' className='w-full text-base text-black group hover:text-main-color duration-300 flex  justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <GrFormPreviousLink className='w-7 duration-300 group-hover:w-10  h-7' />
                            Back to blog
                        </div>
                    </Button>
                    <CommentForm />
                </div> : <div className='flex  justify-center items-center  text-5xl h-screen w-screen'>No News </div>}
        </>
    )
}

export default page