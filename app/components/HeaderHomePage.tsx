import React from 'react'

function HeaderHomePage({ Title, desc }: { Title: string, desc: string }) {
    return (
        <div className="w-full md:w-[70%] mx-auto">
            <h1 className="text-center lg:text-4xl md:text-2xl text-xl font-bold my-2 mt-10">{Title}</h1>
            <p className=" font-thin md:text-base text-center mx-auto mb-12">{desc}</p>
        </div>
    )
}

export default HeaderHomePage