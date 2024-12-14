"use client";
import React, { ReactElement, useEffect, useState } from 'react'
import Button from '../Slider/Button';

export default function ListFooter({ title, list, className }: { title?: string; list: { text: string; link: string; icon?: ReactElement }[]; className?: string; }) {
    const true1 = " hover:text-black cursor-pointer";
    const false1 = "cursor-text"
    const [show, setshow] = useState(true)
    const [state, setState] = useState(false);
    useEffect(() => {
        setState(window.innerWidth <= 768);
    }, []);
    return (
        <div className={`capitalize md  `}>
            {title && <Button
                onClike={() => {
                    setshow(!show)
                }}
                className={`text-white ${className}`}>
                {title}
            </Button>
            }
            <div className={`${show && state ? "max-h-0" : "max-h-[1000px]"} md:block overflow-y-hidden  duration-500  `}>
                {list.map((item, index) => {
                    return <div key={index} className=' text-base leading-10 font-medium '>
                        <Button link={item.link} className={`${item.icon ? false1 : true1} duration-500 mb-2 text-white flex justify-center items-center gap-2`}>
                            {item.icon ? React.cloneElement(item.icon, { className: "w-5 h-5" }) : null}
                            {item.text}
                        </Button>
                    </div>
                })}
            </div>

        </div>
    )
}
