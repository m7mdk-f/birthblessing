"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import NavItem from "./NavItem";
import { FavirateContent, listnavbar } from "../List";
import SocialMedia from "../Footer/SocialMedia";
import Button from "../Slider/Button";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import Motiondiv from "../Motiondiv";
import { AnimatePresence } from "framer-motion";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { useAppContext } from "@/app/context/AppContext";
import { usePathname } from "next/navigation";
import InputCom from "../InputCom";
import { Search, XIcon } from "lucide-react";
import FilterSearch from "../FilterSearch";
import { TbPlayerTrackPrev } from "react-icons/tb";


let listColr = ["rgb(15 76 92 / 1)", "#136F63", "#B23A48", "black", "#005f73", "#6B705C"]

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [wido, setwindow] = useState(true);
    const ref = useRef<HTMLDivElement | null>(null);
    const { activeCart, stateCart, getItem, setItem } = useAppContext()
    const [numberCart, setNmberCart] = useState(0)
    const [numberWishList, setNmberWishList] = useState(0)
    const [value, setValue] = useState("")
    const [showsearch, setShowSearch] = useState(false)
    const [scrollY, setScrollY] = useState<number>(0);
    const pathname = usePathname()
    useEffect(() => {
        const savedColor = getItem('color') || 'rgb(15 76 92 / 1)';
        document.documentElement.style.setProperty('--main-bg-color', savedColor);
    }, [pathname])
    useEffect(() => {
        showsearch ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")
    }, [showsearch])
    useEffect(() => {
        const Items = getItem("Cart") || []
        const WishListItem = getItem("wishList") || []
        setNmberWishList(WishListItem.length)
        Array.isArray(Items) && setNmberCart(Items.reduce((sum, Item) => sum + Item.number, 0))
    }, [getItem])
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShow(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [show]);
    useEffect(() => {
        if (window !== undefined) {
            setwindow(window.innerWidth > 1024)
        }
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])
    const handlbutton = (event: React.MouseEvent<HTMLElement>) => {
        const colorstyle = (event.target as HTMLElement).style.backgroundColor
        const backGround = document.querySelectorAll('.bg-main-color')
        setItem("color", colorstyle)
        backGround.forEach(item => {
            (item as HTMLElement).style.backgroundColor = colorstyle
        })
    }
    return (
        <nav className="flex justify-center z-20  items-center py-3">
            <AnimatePresence mode="wait">
                {scrollY > 160 &&
                    <Motiondiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="z-50">
                        <button onClick={() => window.scrollTo(0, 0)} className="bg-main-color hover:bg-black fixed bottom-5 right-4 rounded-lg p-3" >
                            <TbPlayerTrackPrev className="text-white rotate-90" />
                        </button>
                    </Motiondiv>
                }
            </AnimatePresence>
            <div className="fixed group right-0 md:top-32 top-16 bg-white shadow-2xl border-1 pl-2 py-1 pr-3  hover:translate-x-0 translate-x-6 duration-500 rounded-l-full z-50">
                <button id="circleAnime" style={{ backgroundImage: "url('/images/icons&logo/color-circle.webp')" }} className="p-5 outline-none" >
                </button>

                <div className="bg-white group-hover:block hidden shadow-2xl p-5 w-60 h-64 rounded-lg absolute right-9 top-[60px] text-center">
                    <h3 className="uppercase">live settings</h3>
                    <p className="">Theme Color</p>
                    <div className="grid grid-cols-2 gap-4 flex-wrap mt-7 justify-between gap-y-5">
                        {listColr.map((item, index) => {
                            return <button onClick={(event) => { handlbutton(event) }} key={index} style={{ backgroundColor: item }} className="w-full py-4 rounded-lg  "></button>
                        })}
                    </div>
                </div>
            </div>
            <header className="flex justify-between relative container mx-auto items-center">
                <div className="md:w-64 flex gap-2">
                    <Button onClike={() => setShow(true)} className="lg:hidden block">
                        <IoMdMenu className="md:w-6 md:h-6 h-4 w-4 text-black" />
                    </Button>
                    <Link href="/" className="md:w-[80%] w-28">
                        <Image
                            fill
                            alt="cdc"
                            className="object-contain lg obs w-full"
                            src="/images/icons&logo/logo_499870f1-a3bf-447b-b624-77f977e855b7_230x.webp"
                        />
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {(show || wido) && (
                            <Motiondiv
                                ref={ref}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className={`block gap-6 lg:flex fixed top-0 left-0 bg-white w-full h-screen lg:overflow-visible overflow-auto md:w-1/2 lg:w-auto z-50 lg:h-auto lg:static lg:text-center text-lg capitalize`}
                            >
                                <div className="lg:hidden flex justify-between py-2 border-b w-full px-3 mt-3">
                                    <h1>Menu</h1>
                                    <Button onClike={() => setShow(false)}>
                                        <HiOutlineXMark className="w-6 h-6" />
                                    </Button>
                                </div>
                                {listnavbar.map((item, index) => (
                                    <NavItem key={index} navbar={setShow} list={item} />
                                ))}
                            </Motiondiv>
                        )}
                    </AnimatePresence>
                </div>
                <div className="flex items-center gap-3">
                    <IoIosSearch onClick={() => setShowSearch(true)} className="lg:w-8 lg:h-8 md:h-6 md:w-6 h-4 w-4 cursor-pointer" />
                    <Link href="/wishlist" className="relative inline-block text-center" >
                        <MdFavoriteBorder className="lg:w-8 lg:h-8 md:h-6 md:w-6 h-4 w-4 cursor-pointer" />
                        <span className="absolute -top-2 md:-right-1 md:inline-flex hidden right-1  items-center justify-center md:w-5 md:h-5  bg-main-color text-white text-xs font-semibold rounded-full">
                            {numberWishList}
                        </span>
                    </Link>
                    <FaRegUser className="lg:w-8 lg:h-8 md:h-6 md:w-6 h-4 w-4 cursor-pointer" />
                    <div className="relative inline-block">
                        <BsHandbag className="lg:w-8 lg:h-8 md:h-6 md:w-6 h-4 w-4 cursor-pointer " onClick={() => {
                            pathname == '/shoppingcart' ? activeCart(false) : activeCart(!stateCart())
                        }} />
                        <span className="absolute -top-2 md:-right-1 md:inline-flex hidden right-1  items-center justify-center md:w-5 md:h-5  bg-main-color text-white text-xs font-semibold rounded-full">
                            {numberCart}
                        </span>
                    </div>
                </div>
            </header>
            {
                <div className={`${showsearch ? "opacity-100 " : "opacity-0 pointer-events-none"} w-screen  h-screen bg-black/30 duration-500 z-50 top-0 left-0 fixed`}>
                    <div className="bg-white relative z-50   sm:px-4 w-full py-4">
                        <div className="sm:w-[70%] w-full m-auto flex gap-2">
                            <div className="flex justify-end  items-center relative l w-full">
                                <InputCom onChange={(e) => setValue((e.target as HTMLInputElement).value)} placeholder="Search" className="w-full" type="Email" />
                                <div className="absolute">
                                    <Button className="bg-main-color rounded-r-md p-3 text-white hover:bg-black duration-300" >
                                        <Search />
                                    </Button>
                                </div>
                            </div>
                            <div className=" h-full">
                                <XIcon onClick={() => setShowSearch(false)} className="w-10 h-10 mt-0.5  cursor-pointer" />
                            </div>
                        </div>
                        {value && <FilterSearch onClick={() => setShowSearch(false)} className="sm:w-[70%] mx-auto w-full " value={value} />}
                    </div>
                    <div onClick={() => setShowSearch(false)} className=" w-full h-full "></div>
                </div>
            }
        </nav >
    );
};

export default NavBar;
