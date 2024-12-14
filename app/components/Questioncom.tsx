"use client"
import React, { ReactNode, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Button from './Slider/Button'
import { motion } from 'framer-motion'

export default function Questioncom({ children, question }: { children: ReactNode, question: string }) {

    const [active, setActive] = useState(false)
    return (
        <div className='border my-7 rounded-md border-gray-300 overflow-hidden  '>
            <Button onClike={() => setActive(!active)} className="w-full font-bold  p-3 flex justify-between items-center">
                <p className="text-ssc md:text-base">{question}</p>
                {active ? <FaMinus /> : <FaPlus />}
         
            </Button>
            <div className={`${active ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} duration-500  ease-in-out max-h-0 ml-5`}>
                {children}
            </div>
        </div>
    )
}
