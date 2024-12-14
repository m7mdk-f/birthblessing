"use client"
import React, { SetStateAction, useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import Filter from './Filter'
import Header from './Header'
import { GrFormNextLink } from 'react-icons/gr'
import Button from './Slider/Button'
import Motiondiv from './Motiondiv'
import { AnimatePresence } from 'framer-motion'
import { products } from './List'
function SideBar({ className, active, setActive, values, setvalues }: { className?: string, active: boolean, setActive: React.Dispatch<SetStateAction<boolean>>, values: string[], setvalues: React.Dispatch<SetStateAction<string[]>> }) {
    const topfilter = [
        {
            title: 'In stock',
            numberitem: 0
        },
        {
            title: 'Out of stock',
            numberitem: 0
        }
    ]
    products.forEach((product) => {
        product.colors.forEach((color) => {
            if (color.stock > 0) {
                topfilter[0].numberitem += 1;
            } else {
                topfilter[1].numberitem += 1;
            }
        });
    });

    let colorCounts = new Map<string, number>();
    products.forEach((product) => {
        product.colors?.forEach((colorItem:any) => {
            if (colorItem.color !== undefined) {
                const color = colorItem.color;
                colorCounts.set(color, (colorCounts.get(color) || 0) + 1);
            }
        });
    });
    const result = Array.from(colorCounts, ([color, count]) => ({
        title: color,
        numberitem: count
    }));



    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setIsSmallScreen(false)
        }
        else {
            setIsSmallScreen(true)
        }
    }, [])

    return (
        <>
            <AnimatePresence mode='wait'>
                {
                    <Motiondiv animate={isSmallScreen ? { x: active ? 0 : 1000 } : undefined}
                        initial={isSmallScreen ? { x: 1000 } : undefined}
                        className={`${className || ""} flex-col flex  `}
                        style={{
                            overflowY: "scroll",
                            scrollbarWidth: "none", // For Firefox
                            msOverflowStyle: "none", // For IE
                        }}>
                        <div className="flex w-[95%]  md:w-auto mt-5 md:mt-0 mx-auto justify-between items-center mb-4 md:hidden">
                            <div>
                                <h2 className="text-lg font-semibold">Filter And Sort</h2>
                                <p className='text-gray-600 text-sm'>10 products</p>
                            </div>
                            <button className="text-2xl" onClick={() => {
                                setActive(!active)
                            }}>
                                &times;
                            </button>
                        </div>
                        <hr className="my-3 md:hidden" />
                        <div className='w-[95%] flex flex-col md:gap-0 gap-2 md:w-auto mt-5 md:mt-0 mx-auto relative '>
                            <div className=" md:flex hidden flex-wrap gap-3 my-4 ">
                                {values.map((item, index) => {
                                    return <div onClick={() => { setvalues(values.filter((val) => val !== item)); }} key={index} className="px-2 py-1 rounded-md flex justify-center items-center bg-[#3d405b] duration-500 cursor-pointer hover:bg-black text-yellow-50 ">
                                        <h1 className=" mr-1" >{item.trim().substring(0, item.indexOf(' (')).trim()}</h1>
                                        <h1 className="text-xl ">
                                            <IoIosClose />
                                        </h1>
                                    </div>
                                })}
                                {values.length !== 0 ? <button className="text-gray-500" onClick={() => setvalues([])}>Clear all</button> : ''}
                            </div>
                            <Filter Title="Availability" setvalues={setvalues} value={values} arraycontent={topfilter} />

                            {/* Price Filter */}
                            <Header text="Price" className='md:mt-5 '>
                                <div className="flex items-center gap-2 my-2 mb-3">
                                    <input
                                        type="number"
                                        placeholder="From"
                                        className="w-full rounded-md  border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <span className="mx-2 text-gray-500">$</span>
                                    <input
                                        type="number"
                                        placeholder="To"
                                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                </div>
                            </Header>

                            {/* color  */}
                            <Filter Title="Color" setvalues={setvalues} value={values} arraycontent={result} />
                        </div>
                        <div className='mt-auto md:hidden w-full mb-5'>
                            <hr className="my-3  " />
                            <div className='flex w-[95%] mx-auto'>
                                <Button onClike={() => {
                                    setvalues([])
                                    setActive(false)
                                }} className='w-full h-10 rounded-lg'>
                                    clear all
                                </Button>
                                <Button className='w-full bg-main-color h-10 rounded-lg text-white'>
                                    Apply
                                </Button>
                            </div>
                        </div>
                    </Motiondiv>
                }
            </AnimatePresence>
        </>
    )
}

export default SideBar