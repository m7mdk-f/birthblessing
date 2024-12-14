"use client"
import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Content from './Content'
import { IoIosClose } from 'react-icons/io'
import { products } from './List'
import MtionInViewSec from './MtionInViewSec'




function ProducsPage() {
    let filteredProducts = [...products]
    const [active, setActive] = useState(false)
    const [values, setvalues] = useState<string[]>([])
    const [profilteredProducts, setfilteredProducts] = useState<any[]>([products])
    useEffect(() => {
        filteredProducts = products.filter(product => {
            return product.colors.some((color :any) => {
                return values.some(value => value.startsWith(color.color) || (value.startsWith("In stock") && color.stock > 0) || (value.startsWith("Out of stock") && color.stock == 0));
            });
        });
        filteredProducts = filteredProducts.length == 0 ? [...products] : filteredProducts
        setfilteredProducts(filteredProducts)
    }, [values])

    return (
        <MtionInViewSec delay={1} className='md:flex flex-col md:flex-row flex  gap-4 container py-7'>
            <div className=" flex  flex-wrap gap-3  md:hidden ">
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
            <SideBar values={values} setvalues={setvalues} active={active} setActive={setActive} className='md:sticky fixed top-0 right-0 overflow-y-scroll   md:top-3 md:w-1/3 h-screen ml-auto  w-[90%] bg-white  z-20 md:block' />
            <Content filterPro={profilteredProducts} className='w-full ' active={active} setActive={setActive} />
        </MtionInViewSec>
    )
}

export default ProducsPage