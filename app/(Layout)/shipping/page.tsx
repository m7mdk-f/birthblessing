"use client"
import MtionInViewSec from '@/app/components/MtionInViewSec'
import Shiping from '@/app/components/Shiping'
import React from 'react'
function page() {
    return (
        <MtionInViewSec delay={1}>
            <h1 className="text-xl lg:text-4xl font-bold my-10 text-center">Shipping</h1>
            <Shiping />
        </MtionInViewSec>
    )
}
export default page