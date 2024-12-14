"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Slider/Button";
import { IoIosStar, IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import { XIcon } from "lucide-react";
import ReactDOM from "react-dom";
import InStock from "./InStock";
import { BiMinus, BiPlus } from "react-icons/bi";
import Slider from "./Slider/Slider";

function Product({ itemlist }: { itemlist: any }) {
    const [src, setSrc] = useState(itemlist.image);
    const [quantity, setQuantity] = useState(0); // Track the quantity for this product
    const { setItem, getItem } = useAppContext();
    const [activewishlist, setActiveWishlist] = useState<boolean>(false)
    const [bodyShow, setBodyShow] = useState<HTMLElement | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [number, setnumber] = useState(1);
    const [srcImageShow, setsrcImageShow] = useState(itemlist.image)

    useEffect(() => {
        const wishlist = getItem("wishList") || [];
        if (wishlist.includes(itemlist.id)) {
            setActiveWishlist(true);
        }
        else
            setActiveWishlist(false);
        const cart = getItem("Cart") || [];
        const productInCart = cart.find((item: { id: number; number: number }) => item.id === itemlist.id);
        if (productInCart) {
            setQuantity(productInCart.number);
        }
    }, [itemlist.id, getItem]);

    const handleAddToCart = () => {
        let cart = getItem("Cart") || [];

        const productIndex = cart.findIndex((item: { id: number; number: number }) => item.id === itemlist.id);

        if (productIndex !== -1) {
            cart[productIndex].number += 1;
            setQuantity(cart[productIndex].number); // Update local state
        } else {
            // Add the product with an initial quantity of 1
            const newProduct = { id: itemlist.id, number: 1 };
            cart.push(newProduct);
            setQuantity(1); // Update local state
        }

        setItem("Cart", cart); // Save updated cart in storage
    };
    const AddToWishList = () => {
        {
            setActiveWishlist(!activewishlist)
            let items = getItem("wishList") || []
            if (Array.isArray(items) && items.includes(itemlist.id)) {
                const arr = items.filter(item => item !== itemlist.id)
                setItem("wishList", arr)
            }
            else setItem("wishList", [...items, itemlist.id])

        }
    }

    useEffect(() => {
        if (window !== undefined) {
            setBodyShow(document.body)
        }
    }, [])

    return (
        <div>
            {bodyShow && showModal && ReactDOM.createPortal(
                <div
                    className={`fixed  top-0 overflow-y-scroll    left-0 w-screen md:h-screen  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white   max-w-4xl w-[90%]  p-6 rounded-lg shadow-lg relative"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>

                        <div className=" md:h-[80vh]  md:pt-0 pt-20  grid md:grid-cols-2 grid-cols-1  gap-6">
                            <div className=" flex flex-col gap-4 pb-7">
                                <div className="w-full md:block hidden  h-[75%] relative">
                                    <Image
                                        fill
                                        src={srcImageShow}
                                        alt="Skylofts Rabbit LED Night Lamp Plug"
                                        className="object-cover h-auto rounded-lg"
                                    />
                                </div>

                                {itemlist.images && Array.isArray(itemlist.images) &&
                                    <Slider shownumer={true} slidesView={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 3 } }} containerclass="md:h-1/5 h-[50vh] mt-[30%] md:mt-0 " number={3} spaceBetween={20} headerDivBut="  flex justify-center items-center" className="h-full w-full">
                                        {itemlist.images.map((item:any, index:number) => {
                                            return <div onClick={() => {
                                                setsrcImageShow(item)

                                            }} className={`${srcImageShow == item ? "border-2 border-black " : "border-none"} cursor-pointer rounded-lg overflow-hidden   relative w-full h-full`} key={index}>
                                                <Image
                                                    fill
                                                    src={item}
                                                    alt="Thumbnail 1"
                                                    className=" object-cover "
                                                />
                                            </div>
                                        })}
                                    </Slider>
                                }

                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-gray-400 text-sm">Birthblessing-toys</p>
                                <h2 className="text-4xl font-semibold mb-2 line-clamp-2">
                                    {itemlist.name}
                                </h2>
                                <div className="flex flex-wrap items-center mb-4">
                                    <span className="text-4xl font-bold text-black">${itemlist.price}</span>
                                    {itemlist.originalPrice && <span className="text-gray-400 line-through ml-2">${itemlist.originalPrice}</span>}
                                    <span className="text-sm p-1 text-white rounded-md px-2  bg-main-color ml-4">Sale</span>
                                </div>
                                {Array.isArray(itemlist.colors) && itemlist.colors[0].color && <div>
                                    <h1>Color</h1>
                                    <div className="flex items-center mt-2 space-x-2">
                                        {
                                            itemlist.colors.map((item:any, index:number) => (
                                                <Button
                                                    key={index}
                                                    style={{ backgroundColor: `${item.color}` }}
                                                    className={`${srcImageShow == item.src ? "border-2 border-black " : "border-none"} w-10 h-10 bg-blue-500 rounded-lg`}
                                                    onClike={() => {
                                                        setsrcImageShow(item.src)
                                                        // setStock(item.stock)
                                                    }}
                                                />
                                            ))}
                                    </div>
                                </div>}
                                <h1>Quantity</h1>
                                <div className="flex ">
                                    <div className='flex gap-2 justify-center items-center border px-2 py-1 rounded-md '>
                                        <button
                                            onClick={() => setnumber(Math.max(1, number - 1))}
                                            className=" p-2  rounded-md"
                                        >
                                            <BiMinus />
                                        </button>
                                        <span className="text-lg font-semibold mt-0.5">{number}</span>

                                        <button
                                            onClick={() => setnumber(Math.max(1, number + 1))}
                                            className=" p-2 rounded-md"
                                        >
                                            <BiPlus />
                                        </button>
                                    </div>
                                </div>


                                <div className="flex flex-col   gap-4  ">
                                    <button
                                        onClick={() => {
                                            let arr = getItem("Cart") || []
                                            if (arr && Array.isArray(arr)) {
                                                const state = arr.some(cart => cart.id === itemlist.id)
                                                if (!state) {
                                                    setItem("Cart", [...arr, { id: itemlist.id, number: number }])
                                                }
                                                else {
                                                    const cartItem = arr.map(cart => {
                                                        if (cart.id === itemlist.id) {
                                                            console.log(1)
                                                            return {
                                                                ...cart,
                                                                number: number
                                                            }
                                                        }
                                                        else return cart
                                                    })
                                                    setItem("Cart", cartItem)
                                                }
                                            }
                                            setShowModal(false)
                                        }}
                                        className="flex-1 py-2 bg-main-color text-white  duration-300 text-center rounded hover:bg-black">
                                        Add To Cart
                                    </button>
                                    <button className="flex-1 py-2  duration-300 text-black hover:text-white border-2 border-main-color text-center rounded hover:bg-main-color">
                                        Buy It Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                bodyShow// The container to render the portal into
            )}
            <div className="relative z-10 group bg-secend pb-5 border rounded-lg px-2 overflow-hidden shadow hover:shadow-lg">
                {itemlist.sale && (
                    <div className="w-full h-full absolute top-0 left-0 m-3 z-10 pointer-events-none">
                        <h1 className="bg-main-color px-2 py-1 rounded-md text-white inline-block">Sale</h1>
                    </div>
                )}
                <div className="relative">
                    <Link href={`/product/${itemlist.id}`}>
                        <div className="relative w-full h-72">
                            <Image fill src={src} alt="Product Name" className="object-cover rounded-md" />
                        </div>
                    </Link>
                    <div className="absolute top-2 md:flex  hidden right-4 flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button onClike={AddToWishList} className="p-2.5 bg-white bgButton rounded-lg overflow-hidden flex justify-center items-center  shadow hover:shadow-md">
                            {activewishlist ? (
                                <XIcon className="w-6 h-6" />
                            ) : (
                                <IoMdHeartEmpty className="w-6 h-6" />
                            )}
                        </Button>
                        <Button onClike={() => setShowModal(true)} className="p-2.5 bg-white bgButton rounded-lg overflow-hidden flex justify-center items-center  shadow hover:shadow-md">
                            <IoEyeOutline className="w-6 h-6" />
                        </Button>
                    </div>
                    {/* Add to Cart Button */}
                    <Button
                        onClike={handleAddToCart}
                        className="absolute bgButton bottom-4 md:block hidden left-1/2 w-8/12 transform -translate-x-1/2 px-4 py-2 bg-main-color text-white rounded shadow hover:shadow-md opacity-0 group-hover:opacity-100 duration-300"
                    >
                        <p className="line-clamp-1">Add to Cart </p>
                    </Button>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="flex items-center mt-2 space-x-2">
                        {Array.isArray(itemlist.colors) &&
                            itemlist.colors[0].color &&
                            itemlist.colors.map((item:any, index:number) => (
                                <Button
                                    key={index}
                                    style={{ backgroundColor: `${item.color}` }}
                                    className={`${src === `${item.src}` ? "border -translate-y-1 border-black" : "border-0 translate-y-0"
                                        } w-4 h-4 bg-blue-500 rounded-full`}
                                    onClike={() => setSrc(`${item.src}`)}
                                />
                            ))}
                    </div>
                </div>
                <Link href={`/product/${itemlist.id}`}>
                    <h2 className="text-lg font-normal mt-2 text-center line-clamp-1">{itemlist.name}</h2>
                    <p className="text-lg font-bold text-center">
                        ${itemlist.price}{" "}
                        {itemlist.originalPrice && (
                            <span>
                                <s className="text-sm text-black/30">${itemlist.originalPrice}</s>
                            </span>
                        )}
                    </p>
                </Link>

                <div className="flex justify-center items-center w-full">
                    <div className="flex items-center mt-2 text-black/30">

                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <p>(0)</p>
                    </div>
                </div>
                <div className="justify-center items-center mt-3 md:hidden flex">
                    <div className="flex gap-3">
                        <Button onClike={handleAddToCart} className="p-2.5 bg-white rounded-lg bgButton overflow-hidden flex justify-center items-center shadow hover:shadow-md">
                            <BsHandbag className="w-6 h-6" />
                        </Button>
                        <Button onClike={AddToWishList} className="p-2.5 bg-white bgButton rounded-lg overflow-hidden flex justify-center items-center  shadow hover:shadow-md">
                            {activewishlist ? (
                                <XIcon className="w-6 h-6" />
                            ) : (
                                <IoMdHeartEmpty className="w-6 h-6" />
                            )}
                        </Button>
                        <Button onClike={() => setShowModal(true)} className="p-2.5 bg-white rounded-lg bgButton overflow-hidden flex justify-center items-center shadow hover:shadow-md">
                            <IoEyeOutline className="w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Product;
