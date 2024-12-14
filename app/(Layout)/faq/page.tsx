"use client"
import React from 'react'
import Questioncom from '../../components/Questioncom'
import { listQustion } from '../../components/List'
import MtionInViewSec from '@/app/components/MtionInViewSec'

function page() {
    return (
        <MtionInViewSec delay={1} className='container'>
            <h1 className="text-xl lg:text-4xl font-bold my-10 text-center">FAQ</h1>
            {listQustion.map((item, index) => (
                <Questioncom key={index} question={item.title}>
                    <ul className="text-gray-500 leading-10 pl-3">
                        {item.anser.map((an, index) => (
                            <li key={index}>
                                <p>{an}</p>
                            </li>
                        ))}
                    </ul>
                </Questioncom>
            ))}
        </MtionInViewSec>
    )
}

export default page