"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "./Slider/Button";
import Image from "next/image";
import Link from "next/link";

interface Item {
    title: string;
    items?: string[];
    image: string;
}

function ShowDetails({ item, navbar }: { item: Item, navbar: any }) {
    const [active, setActive] = useState(false);

    return (
        <div className="text-left justify-start w-full items-start p-3">
            <div
                onClick={() => setActive(!active)}
                className="text-lg cursor-pointer lg:font-normal flex justify-between font-bold"
                aria-expanded={active}
            >
                <div>{item.title}</div>
                <div className="lg:hidden"><FaMinus className={`${active ? '' : 'hidden'}`} />  <FaPlus className={`${active ? 'hidden' : ''}`} /></div>
            </div>
            <div
                className={`${active ? "max-h-screen" : "max-h-0"} duration-500 overflow-hidden lg:max-h-screen`}
            >
                {Array.isArray(item.items) &&
                    item.items.map((itm, subIndex) => (
                        <div key={subIndex}>
                            <Button onClike={() => navbar(false)} link={`/collections/${itm}`} className="text-sm my-1 lg:ml-0 ml-4 text-gray-800">
                                {itm}
                            </Button>
                        </div>
                    ))}
            </div>
            <div className="w-full mt-3 h-36 lg:flex block justify-center relative items-center ">
                <Image
                    fill
                    className=" object-cover rounded-lg border"
                    alt={item.title}
                    src={item.image}
                />
            </div>
        </div>
    );
}

export default ShowDetails;
