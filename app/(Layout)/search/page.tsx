"use client"
import React, { InputHTMLAttributes, use, useEffect, useState } from 'react'
import InputCom from '../../components/InputCom'
import { CiSearch } from 'react-icons/ci'
import { products } from '@/app/components/List'
import Image from 'next/image'
import { GrFormNextLink } from 'react-icons/gr'
import Link from 'next/link'
import FilterSearch from '@/app/components/FilterSearch'
import MtionInViewSec from '@/app/components/MtionInViewSec'
function page() {
    const [value, setValue] = useState("")

    return (
        <MtionInViewSec delay={1}>
            <h1 className="text-xl lg:text-4xl font-bold my-10 text-center capitalize">Search</h1>
            <div className="container min-h-[60vh]  ">
                <div className='max-w-[700px] mx-auto'>
                    <form className="relative flex justify-end  ">
                        <InputCom onChange={(e) => setValue((e.target as HTMLInputElement).value)} placeholder='Search' className="border-2 text-sm inline-block  border-gray-300  w-full" type="text" />
                        <div className='absolute  pt-1 pr-1 text-gray-500'><CiSearch className='w-8 h-8' /></div>
                    </form>
                    {value && <FilterSearch value={value} />}
                </div>
            </div>

        </MtionInViewSec >
    )
}

export default page