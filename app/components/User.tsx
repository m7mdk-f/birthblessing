import Image from 'next/image'
import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'

function User({ listuser }: { listuser: { desc: string, name: string, image: string, work: string } }) {
    return (
        <div className="flex flex-col items-center justify-center text-center ">
            <div className=" text-main-color  mb-4">
                <RiDoubleQuotesL className="w-28 h-28" />
            </div>
            <p className="max-w-2xl text-gray-600 text-lg mb-8">
                {listuser.desc}
            </p>
            {/* User Info */}
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full mb-4 relative border border-main-color overflow-hidden">
                    <Image
                        fill
                        src={listuser.image}
                        alt="User Profile"
                        className="object-cover"
                    />
                </div>
                {/* User Name */}
                <h3 className="text-xl font-semibold text-black">{listuser.name}</h3>
                {/* User Role */}
                <p className="text-gray-500 capitalize">{listuser.work}</p>
            </div>
        </div>
    )
}

export default User