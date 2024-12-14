import Image from 'next/image'
import React from 'react'
import InputCom from '../InputCom'
import Button from '../Slider/Button'
import Link from 'next/link'
import SocialMedia from '../Footer/SocialMedia'
import { listButton, listContact, listExtras, listServer, SocialContent } from '../List'
import ListFooter from '../Footer/ListFooter'
import ListButtondown from '../Footer/ListButtondown'

function Footer() {
    return (
        <footer className="relative ">
            <div className="container relative  top-14 mx-auto flex-wrap md:flex-nowrap flex justify-between items-center bg-extra-gray rounded-lg overflow-hidden px-10 py-7" >
                <div className="flex justify-center w-full md:w-auto mb-3 md:mb-0 gap-3 items-center">
                    <div className="w-24 lg:block hidden">
                        <Image fill alt="ss" className="object-cover obs" src="/images/icons&logo/email.png" />
                    </div>
                    <h1 className="uppercase font-bold text-xl md:max-w-40">SIGN UP FOR
                        NEWSLETTER</h1>
                </div>
                <div className="h-12 w-[2px] lg:block hidden bg-gray-300"></div>

                <div className="lg:block  hidden">
                    <p className="max-w-80 text-base font-extralight">
                        Subscribe to the weekly newsletter for
                        all the latest updates
                    </p>
                </div>
                <div className="flex justify-end items-center relative lg:w-[40%] md:w-[60%] w-full">
                    <InputCom placeholder="Email" className="w-full" type="Email" />
                    <div className="absolute">
                        <Button className="bg-main-color rounded-r-md p-3 text-white hover:bg-black duration-300" >
                            Subscrbe
                        </Button>
                    </div>
                </div>
            </div>
            <div className="bg-main-color pt-32 pb-7 ">
                <div className="flex lg:flex-nowrap flex-wrap  gap-3 container mx-auto">
                    <div className="lg:w-1/3 md:w-full text-white ">
                        <div className="w-60  mb-7">
                            <Link href="/">
                                <Image src="/images/icons&logo/white_270x.webp" fill alt="" className="object-contain obs" />
                            </Link>
                        </div>
                        <p className="flex justify-start items-start my-3 lg:max-w-96 leading-9 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque sit, sed repellendus et cum temporibus numquam ipsam odio similique, quam ex architecto pariatur corporis aliquam quasi, ab sapiente</p>
                        <div>
                            <SocialMedia list={SocialContent} iconClass='group-hover:text-white duration-500' className='bg-white rounded-md p-2  hover:bg-black group duration-500' />
                        </div>
                    </div>
                    <div className=" md:flex  justify-between lg:w-2/3 w-full lg:mt-0 mt-5">
                        <ListFooter title="Service" list={listServer} className="'text-white md:cursor-text  cursor-pointer  md:text-2xl text-lg font-medium md:mb-11 mb-3 '" />
                        <ListFooter title="extras" list={listExtras} className="'text-white md:cursor-text  cursor-pointer  md:text-2xl text-lg font-medium md:mb-11 mb-3 '" />
                        <ListFooter title="contact us" list={listContact} className="'text-white md:cursor-text  cursor-pointer  md:text-2xl text-lg font-medium md:mb-11 mb-3 '" />

                    </div>
                </div>
                <div className="px-4 container mx-auto hidden lg:block ">
                    <div className=" px-[60px] py-10 text-white text-center leading-10 text-lg flex flex-wrap justify-center items-center gap-2">
                        <ListButtondown list={listButton} className="px-6 text-base hover:text-black hover:border-black duration-300 inline border-r-2" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer