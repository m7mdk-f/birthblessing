"use client"
import React, { ReactNode, use, useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Motiondiv from './Motiondiv'
import { AnimatePresence } from 'framer-motion'
import { GrFormNextLink } from 'react-icons/gr'

export default function Header({ text, className, children }: { children?: ReactNode, text: string, className?: string }) {
    const [show, setShow] = useState(true)
    const [showMobile, setShowMobile] = useState(false)

    const [wind, setWindow] = useState(false)
    useEffect(() => {
        setWindow(window.innerWidth >= 768)
    }, [])

    return (
        <div >
            <div className="flex justify-between my-2 cursor-pointer" onClick={() => {
                setShow(!show)
                setShowMobile(!showMobile)
            }
            }>
                <h2 className={`${className || ""} md:text-lg text-sm   md:font-semibold md:uppercase capitalize  font-medium`}>{text}</h2>
                <button

                >
                    <FaAngleDown className='md:block hidden' />
                    <GrFormNextLink className='md:hidden block w-6 h-6' />
                </button>
            </div>
            <hr className="md:my-3 hidden md:block" />

            <AnimatePresence mode='wait'>
                {!wind && <Motiondiv animate={{ x: showMobile ? 0 : 1000 }} exit={{ x: 1000 }} initial={{ x: 1000 }} className='md:hidden absolute z-30 -top-2 right-0 h-full bg-white  w-full'>
                    <div className='flex gap-2 cursor-pointer' onClick={() => {
                        setShowMobile(!showMobile)
                    }}>
                        <GrFormNextLink className='md:hidden block w-7 h-7  rotate-180' />
                        <h2 className={`${className || ""} text-lg  font-semibold uppercase  `}>{text}</h2>
                    </div>
                    {children}
                </Motiondiv>
                }
            </AnimatePresence>
            <div className='md:block hidden'>
                <AnimatePresence mode='wait'>
                    {wind &&
                        <Motiondiv animate={{ opacity: show ? 1 : 0, height: show ? 'auto' : 0 }} initial={{ opacity: 0, height: '0' }}>
                            {children}
                        </Motiondiv>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}
