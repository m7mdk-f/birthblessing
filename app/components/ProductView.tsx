"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import NumberInput from './NumberInput'
import { FaCheck, FaChevronDown } from 'react-icons/fa'
import { XIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import ProductDetails from './ProductDetails'
import InStock from './InStock'
import { FiBox, FiShare } from 'react-icons/fi'
import Shiping from './Shiping'
import InputCom from './InputCom'
import InputButton from './InputButton'
import { useAppContext } from '../context/AppContext'

const ProductView = ({ item }: { item: any }) => {
    const [img, updateimg] = useState(item.image)
    item.colors.length > 0
    const [stock, updatestock] = useState(item.colors[0].stock)
    const [info, updateinfo] = useState(false)
    const [color, updatecolor] = useState(item.colors[0].color)
    const [video, updatevideo] = useState('none')
    const [shiping, setShiping] = useState(false)
    const [number, setnumber] = useState(1);

    const { getItem, setItem } = useAppContext()


    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                updateinfo(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [info]);


    return (
        <div className='container md:flex gap-7 pt-10'>
            <div className='md:sticky top-2 md:w-1/2 h-[70vh] sm:h-screen'>
                <div className='relative w-full h-[50vh] sm:h-[85vh]'>
                    <Image className='rounded' src={img} alt='product-photo' fill />
                    {video === 'block' ?
                        <video autoPlay muted={false} loop className='rounded w-full relative z-10 h-full object-fill'>
                            <source src='/images/video.mp4' type='video/mp4' />
                        </video>
                        : null
                    }
                </div>
                <div className='flex gap-5 h-2 mt-5'>
                    {Array.isArray(item.images) && item.images.map((image: string, i: number) => {
                        return <div key={i}>
                            {image.includes('video')
                                ? <button onClick={() => {
                                    updatevideo('block');
                                }} className='hover:after:flex after:hidden after:absolute relative after:bg-gray-50/30 after:inset-0 focus:border focus:rounded border-black'>
                                    <Image className='rounded' src={image} width={120} height={100} alt='product' />
                                </button>
                                : <button onClick={() => {
                                    updateimg(image)
                                    updatevideo('none');
                                }} className='hover:after:flex after:hidden after:absolute relative after:bg-gray-50/30 after:inset-0 focus:border focus:rounded border-black'>
                                    <Image className='rounded' src={image} width={120} height={100} alt='product' />
                                </button>
                            }
                        </div>
                    })}
                </div>
            </div>
            <div className='md:w-1/2'>
                <ProductDetails name={item?.name} price={item?.price} originalPrice={item.originalPrice} details={item?.details} />
                {item.colors.length > 1 ?
                    <div>
                        <p className='text-xl mb-2 mt-10'>color</p>
                        <div className='flex gap-2'>
                            {item?.colors?.map((color:any, i:number) => <button key={i} onClick={() => {
                                updateimg(color.src)
                                updatestock(color.stock)
                                updatecolor(color.color)
                                updatevideo('none');
                            }} style={{ backgroundColor: `${color.color}` }} className='p-4 inline-block border border-gray-300 rounded-[5px] focus:border focus:rounded focus:border-black'></button>)}
                        </div>
                    </div>

                    : null}
                <InStock stock={stock} />
                <div>
                    <p className='text-sm mt-5'>Quantity</p>
                    <NumberInput number={number} setnumber={setnumber} />
                </div>
                <div className='py-2 flex flex-col gap-4'>
                    <button onClick={() => {
                        let arr = getItem("Cart") || []
                        if (arr && Array.isArray(arr)) {
                            const state = arr.some(cart => cart.id === item.id)
                            if (!state) {
                                setItem("Cart", [...arr, { id: item.id, number: number }])
                            }
                            else {
                                const cartItem = arr.map(cart => {
                                    if (cart.id === item.id) {
                                        console.log(1)
                                        return {
                                            ...cart,
                                            number: number
                                        }
                                    }
                                    else return cart
                                })
                                setItem("Cart", cartItem)
                            }
                        }
                    }} className='bg-main-color text-white w-full p-2.5 rounded-xl hover:bg-black duration-200'>Add To Cart</button>
                    <button className='border border-black w-full p-2.5 rounded-xl hover:bg-black hover:text-white duration-200'>Buy It Now</button>
                </div>
                <div className='flex items-start gap-1 mt-3'>
                    <FaCheck className='text-green-600 text-xs mt-[5px]' />
                    <div>
                        <p className='text-sm text-gray-500'>Pickup available at 403, Amora Arcade, Near Mouni International School,</p>
                        <p className='text-sm text-gray-500 my-3'>Usually ready in 24 hours</p>
                        <button className="inline-block border-b text-sm border-solid border-black" onClick={() => updateinfo(true)}>View store information</button>
                    </div>
                </div>
                <div className='py-5 border-b px-3 mt-3'>
                    <div className='flex gap-2'>
                        <FiShare className='text-base' />
                        <button className='text-sm hover:border-b border-black'>Share</button>
                    </div>
                </div>
                <div className='border-b py-5  px-3'>
                    <div onClick={() => setShiping(!shiping)} className='cursor-pointer flex justify-between'>
                        <div className='flex gap-1'>
                            <FiBox />
                            <h1> Shipping and Return</h1>
                        </div>
                        <FaChevronDown />
                    </div>

                    <Shiping className={`${shiping ? 'max-h-screen ' : 'max-h-0 '} overflow-hidden duration-500`} classul='text-sm text-gray-600' />
                </div>
                <AnimatePresence mode='wait'>
                    {info && <motion.div ref={ref} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .3 }} exit={{ opacity: 0, x: 50 }} className="w-full md:w-1/3 bg-white fixed z-50 right-0 top-0 bottom-0 left-auto">
                        <button className="text-3xl font-thin absolute right-7 top-7" onClick={() => updateinfo(false)}><XIcon /></button>
                        <div className="w-[80%] mx-auto">
                            <div className="mt-10 ">
                                <div>
                                    <h1 className="text-2xl font-medium mb-3">{item?.name}</h1>
                                </div>
                                {color &&
                                    <p className="text-opositnew text-base mb-7 text-gray-600">Color: {color}</p>
                                }
                            </div>
                            <hr className="mb-7 h-2px" />
                            <div className=''>
                                <h1 className="text-base font-normal mb-3">403, Amora Arcade, Near Mouni International School,</h1>
                                <p className="flex  text-sm mb-7 text-gray-600">
                                    <FaCheck className='text-green-600 text-xs mt-1' />
                                    &nbsp;
                                    Pickup available, usually ready in 24 hours </p>
                            </div>
                            <div className="mb-5 text-sm text-gray-600">
                                <p className="text-opositnew text-sm  w-full">403, Amora Arcade, Near Mouni International School,</p>
                                <p className="text-opositnew text-sm  w-full my-2"> 394105 Surat GJ </p>
                                <p className="text-opositnew text-sm  w-full"> India</p>
                            </div>
                            <hr className="mb-7 h-2px" />
                        </div>
                    </motion.div>}
                </AnimatePresence >
            </div>
        </div>
    )
}

export default ProductView