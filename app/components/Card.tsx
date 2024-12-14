import Image from 'next/image'
import React from 'react'
import MtionInViewSec from './MtionInViewSec'

function Card({ listView }: { listView: { title: string, desc: string, image: string }[] }) {
    return (
        <MtionInViewSec className="bg-white container  grid-cols-1  grid gap-5 md:grid-cols-4 sm:grid-cols-2  mx-auto border border-solid rounded-lg  md:px-2 px-5 py-10 " >
            {listView.map((item, index) => (
                <div key={index} className="xl:flex justify-start flex md:block items-center md:flex-wrap xl:flex-wrap   ">
                    <div className='flex  justify-center items-center'>
                        <div className="text-center mr-3  md:w-20 md:h-20 p-2  flex justify-center items-center hover:shadow-md duration-500 bg-white border rounded-full  ">
                            <div className="   md:h-14 md:w-14 w-10 h-10   inline-block relative ">
                                <Image fill alt="" src={item.image} className=" object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="xl:flex h-full md:block    ">
                        <div className="xl:text-left text-left mt-3 md:text-center ">
                            <h2 className="  text-xl mb-2 mt-1 uppercase">{item.title}</h2>
                            <p className="xl:text-left text-left mt-3 md:text-center text-black/30 text-xs md:text-sm">{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </MtionInViewSec>
    )
}

export default Card