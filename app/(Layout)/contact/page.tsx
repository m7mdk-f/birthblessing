"use client"
import ConcatDetails from '@/app/components/ConcatDetails'
import InputCom from '@/app/components/InputCom'
import MtionInViewSec from '@/app/components/MtionInViewSec'
import React from 'react'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'

function page() {
    return (
        <MtionInViewSec delay={1}>
            <h1 className="text-xl lg:text-4xl font-bold my-10 text-center capitalize">Contact</h1>

            <section className="container mb-12 flex justify-between text-center flex-wrap sm:flex-nowrap">
                <ConcatDetails>
                    <IoCallOutline className='w-10 h-10 text-gray-400 ' />
                    <h4 className="md:mb-10px">Call us</h4>
                    <p className="text-sm text-gray-400 ">0123-456-789</p>
                </ConcatDetails>

                <ConcatDetails>
                    <SlLocationPin className='w-10 h-10 text-gray-400 ' />
                    <h4 className="md:mb-10px">Location</h4>
                    <p className="text-sm text-gray-400 ">1093 marigold lane, way Miami, Florida USA</p>
                </ConcatDetails>

                <ConcatDetails>
                    <MdOutlineMail className='w-10 h-10 text-gray-400 ' />
                    <h4 className="md:mb-10px">Email</h4>
                    <p className="text-sm text-gray-400 ">demo@demo.com</p>
                </ConcatDetails>

            </section>
            <section className="container flex flex-wrap lg:flex-nowrap gap-10">
                <form className="w-[90%] mx-auto lg:w-1/2 mt-12 flex flex-col gap-3">
                    <InputCom className='w-full' type="text" placeholder='Name' />
                    <InputCom className='w-full' type="email" placeholder='Email' />
                    <InputCom className='w-full' type="tel" placeholder='Phone Number' />
                    <textarea placeholder="Comment" className="border-2 p-3 h-32 inline-block border-gray-300  outline-none  focus:outline-none rounded-4 w-full"  >
                    </textarea>
                    <button type="submit" className="bg-main-color newcolor hover:bg-black px-3 py-2 rounded-10 text-white inline-block mt-22px duration-200">Send</button>
                </form>
                <div className="w-[90%] mx-auto lg:w-1/2 mt-12 overflow-hidden min-h-[400px]">
                    <iframe className="w-full h-full min-h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.120863958724!2d34.44234691089123!3d31.51346311107215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f406989ca85%3A0x771534403f1dfd03!2sAl-Azhar%20University%20-%20Gaza!5e0!3m2!1sar!2s!4v1670669675038!5m2!1sar!2s" style={{ border: 0 }} loading="lazy" ></iframe>
                </div>
            </section>
        </MtionInViewSec>
    )
}

export default page