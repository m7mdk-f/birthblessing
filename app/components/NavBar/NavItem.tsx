import React, { useState } from 'react';
import Button from '../Slider/Button';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown, FaMinus, FaPlus } from 'react-icons/fa';
import Slider from '../Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { LuCalendarDays } from 'react-icons/lu';
import { object } from 'framer-motion/client';
import { usePathname } from 'next/navigation';
import ShowDetails from '../ShowDetails';



function NavItem({ list, navbar }: { list: any, navbar: any }) {
    const istrue = Array.isArray(list.list) && list.list[0].image !== undefined;
    const [show, setShow] = useState(false)

    let i = 0;
    return (
        <div className="group ">
            <div className="relative flex gap-2 py-2 border-b lg:py-0 lg:border-none lg:mt-0 mt-2   lg:px-0 px-3 lg:justify-center justify-between lg:items-center cursor-pointer">
                <Button link={list.link}
                    onClike={() => navbar(false)}
                    className={` before:w-0  before:h-0.5 before:absolute hover:before:w-full before:bg-black before:bottom-0 before:duration-500 top-auto overflow-hidden before:left-0`}
                >
                    {list.text}
                </Button>
                {list.list != null ? <div><FaChevronDown className={`lg:block hidden w-4 h-4`} /><div className="lg:hidden" onClick={() => setShow(!show)}><FaMinus className={`${show ? '' : 'hidden'}`} />  <FaPlus className={`${show ? 'hidden' : ''}`} /></div></div> : ""}
            </div>
            <div className={`${istrue ? "" : "relative"}  lg:max-h-[1000px]  ${show ? 'max-h-[1000px]' : 'max-h-0'} duration-500  lg:overflow-visible overflow-hidden`}>
                {list.list && Array.isArray(list.list) && (
                    <div className={` ${istrue ? "lg:flex  left-0 mx-auto w-full  top-[48px]" : " block  lg:w-44 -left-6  top-[10%]"}   lg:group-hover:opacity-100 opacity-100 lg:opacity-0 p-3 text-left  pointer-events-none duration-500 group-hover:pointer-events-auto justify-between z-10  mx-auto lg:border lg:rounded-md gap-3 bg-white lg:absolute `}>
                        {Array.isArray(list.list) && list.list.map((item:any, index:number) => {
                            if (item.image == undefined) {
                                return <div key={index}>
                                    <Button onClike={() => navbar(false)} link={`/collections/${item}`} className='text-base lg:my-0 my-1 lg:ml-0 ml-4 text-gray-800 '>
                                        {item}
                                    </Button>
                                </div>
                            }
                            else if (item.text === undefined && item.id === undefined) {
                                return (
                                    <ShowDetails navbar={navbar} item={item} key={index} />
                                )
                            }
                            else {
                                if (i == 0) {
                                    i++;
                                    return (
                                        <Slider number={4} key={index} divClass='w-full flex justify-center items-center gap-3 mt-5' divcontainSlid={false} >
                                            {Array.isArray(list.list) && list.list.map((listView:any, i:number) => {
                                                return (
                                                    <div key={i} className="text-center  overflow-hidden ">
                                                        <div>
                                                            <div className=' w-full relative h-44'>
                                                                <Image fill className="mb-1 rounded-xl object-cover" src={listView.image} alt="Toys" />
                                                            </div>
                                                            <Button className='text-black text-base my-2' onClike={() => navbar(false)} link={`/newsdetails/${listView.id}`}>
                                                                {listView.title}
                                                            </Button>
                                                            <div >
                                                                <p className='flex justify-center items-center gap-2' ><LuCalendarDays />08 Feb 22</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Slider>
                                    )
                                }
                                return "";
                            }
                        })}
                    </div>
                )}
            </div>

        </div>
    );
}

export default NavItem;
0