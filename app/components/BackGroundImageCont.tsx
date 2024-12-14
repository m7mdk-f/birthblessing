import Link from 'next/link'
import React from 'react'

export default function BackGroundImageCont({ className, Title, desc, backgroundImage }: { backgroundImage?: string, className?: string, Title: string, desc: string }) {
    return (
        <div className={` ${className || ''} pb-10  backg-150 bg-no-repeat bg- duration-1000 ease-in-out rounded-lg p-10 w-full bghover   `} style={{ backgroundImage: backgroundImage, backgroundPosition: 'center'}}>
            <div className="p-2 w-85%">
                <h2 className="mb-5 lg:text-3xl md:text-2xl text-xl font-extrabold ">{Title}</h2>
                <p className="hidden lg:block mb-4 max-w-sm line-clamp-3">{desc}</p>
                <Link className="mt-5 inline-block px-7 py-3 rounded-md duration-500 hover:text-white hover:bg-main-color bg-white text-black" href="/collections">Shop Now</Link>
            </div>
        </div>
    )
}
