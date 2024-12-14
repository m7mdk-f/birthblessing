"use client"
import React, { useState } from 'react'
import MainButton from './MainButton'
import Button from './Slider/Button'
import { CiHeart } from 'react-icons/ci'
import { BiMinus, BiPlus, BiSolidShow } from 'react-icons/bi'
import { IoIosStar, IoMdHeartEmpty } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { useAppContext } from '../context/AppContext'
import { XIcon } from 'lucide-react'
import Slider from './Slider/Slider'

interface product {
    id: number,
    sale: boolean,
    image: string,
    name: string,
    details: string[],
    price: number,
    colors: { color: string, src: string, stock: number }[],
    images: string[],
    originalPrice?: number
}
function ShowProduct({ product }: { product: any }) {
    const [image, setImage] = useState(product.image)
    const [quantity, setQuantity] = useState(0); // Track the quantity for this product
    const { getItem, setItem } = useAppContext()
    const [activewishlist, setActiveWishlist] = useState<boolean>(false)
    const [showModal, setShowModal] = useState(false);
    const [srcImageShow, setsrcImageShow] = useState(product.image)
    const [number, setnumber] = useState(1);



    const handleAddToCart = () => {
        let cart = getItem("Cart") || [];

        const productIndex = cart.findIndex((item: { id: number; number: number }) => item.id === product.id);

        if (productIndex !== -1) {
            cart[productIndex].number += 1;
            setQuantity(cart[productIndex].number); // Update local state
        } else {
            // Add the product with an initial quantity of 1
            const newProduct = { id: product.id, number: 1 };
            cart.push(newProduct);
            setQuantity(1); // Update local state
        }

        setItem("Cart", cart); // Save updated cart in storage
    };

    const AddToWishList = () => {
        {
            setActiveWishlist(!activewishlist)
            let items = getItem("wishList") || []
            if (Array.isArray(items) && items.includes(product.id)) {
                const arr = items.filter(item => item !== product.id)
                setItem("wishList", arr)
            }
            else setItem("wishList", [...items, product.id])

        }
    }
    return (
        <section className="bg-gray-light py-10">
            {showModal &&
                <div
                    className={`fixed  top-0 overflow-y-scroll   left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}
                    onClick={() => setShowModal(false)} // Close modal when clicking on background
                >
                    <div
                        className="bg-white   max-w-4xl w-[90%] p-6 rounded-lg shadow-lg relative"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowModal(false)}
                        >
                            ✕
                        </button>

                        <div className="  md:h-[80vh]  md:pt-0 pt-20  grid md:grid-cols-2 grid-cols-1  gap-6">
                            <div className=" flex flex-col gap-4 pb-7">
                                <div className="w-full md:block hidden  h-[75%] relative">
                                    <Image
                                        fill
                                        src={srcImageShow}
                                        alt="Skylofts Rabbit LED Night Lamp Plug"
                                        className="object-cover h-auto rounded-lg"
                                    />
                                </div>

                                {product.images && Array.isArray(product.images) &&
                                    <Slider shownumer={true} slidesView={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 3 } }} containerclass="md:h-1/5 h-[50vh] mt-[30%] md:mt-0 " number={3} spaceBetween={20} headerDivBut="  flex justify-center items-center" className="h-full w-full">
                                        {product.images.map((item: any, index: number) => {
                                            return <div onClick={() => {
                                                setsrcImageShow(item)
                                            }} className={`${srcImageShow == item ? "border-2 border-black " : "border-none"} cursor-pointer rounded-lg overflow-hidden relative w-full h-full`} key={index}>
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
                                    {product.name}
                                </h2>
                                <div className="flex items-center mb-4">
                                    <span className="text-4xl font-bold text-black">${product.price}</span>
                                    {product.originalPrice && <span className="text-gray-400 line-through ml-2">${product.originalPrice}</span>}
                                    <span className="text-sm p-1 text-white rounded-md px-2  bg-main-color ml-4">Sale</span>
                                </div>
                                {Array.isArray(product.colors) && product.colors[0].color && <div>
                                    <h1>Color</h1>
                                    <div className="flex items-center mt-2 gap-2 flex-wrap">
                                        {
                                            product.colors.map((item: any, index: number) => (
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
                                                const state = arr.some(cart => cart.id === product.id)
                                                if (!state) {
                                                    setItem("Cart", [...arr, { id: product.id, number: number }])
                                                }
                                                else {
                                                    const cartItem = arr.map(cart => {
                                                        if (cart.id === product.id) {
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
                </div>}
            <div className="container px-3 xl:h-[85vh] md:h-[70vh]">
                <div className="flex flex-wrap md:flex-nowrap xl:gap-20 gap-7 md:2 h-[90%] bg-gray-bold items-center">
                    <div className="w-full h-[70vh] md:w-1/2 flex gap-3 sm:gap-0  flex-col-reverse sm:flex-row">
                        <div className="sm:h-full sm:w-[20%] w-full sm:block flex lg:pt-5">
                            {product.colors.map((item: any, index: number) => <Button key={index} className="w-full sm:h-1/4 h-32  relative">
                                <Image onClick={() => {
                                    setImage(item.src)
                                    console.log(1)
                                }} fill alt="" className="object-cover" src={item.src} />
                            </Button>)}
                        </div>
                        <div className="sm:w-[80%] w-full h-[90%] relative">
                            <Image fill alt="" src={image} className="object-cover border-2 border-solid rounded-2xl shadow-lg" />
                            <p className="absolute top-5 left-5 text-white bg-main-color newcolor py-0.5 text-center px-3 text-base rounded-md">
                                Sale</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-end items-end  mb-auto h-[90%]  relative ">
                        <div className="bg-white p-3 sm:p-0 rounded-xl relative flex flex-col-reverse sm:flex-row gap-3 h-full xl:h-[80%] mt-auto">
                            <div className="flex justify-center items-center relative sm:-left-5">
                                <div className="flex justify-center w-full items-center sm:h-[80%]  ">
                                    <div className=" flex sm:block w-full justify-around  newcolor text-white text-center bg-main-color  p-2 rounded-lg ">
                                        <div>
                                            <p>367</p>
                                            <p>Days</p>
                                            <div className="h-0.5 w-5 mx-auto sm:block hidden  bg-white my-3"> </div>
                                        </div>
                                        <div>
                                            <p>15</p>
                                            <p>Hours</p>
                                            <div className="h-0.5 w-5 mx-auto sm:block hidden bg-white my-3"> </div>
                                        </div>
                                        <div>
                                            <p>33</p>
                                            <p>Min</p>
                                            <div className="h-0.5 w-5 mx-auto sm:block hidden bg-white my-3"> </div>
                                        </div>
                                        <div>
                                            <p>02</p>
                                            <p>Sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex  justify-center items-center">
                                <div className="  flex flex-col gap-3 ">
                                    <Link href={`/product/${product.id}`} className="text-sm lg:font-semibold font-normal duration-300 hover:text-blue-900 lg:text-lg">{product.name}</Link>
                                    <div className="flex items-center   text-black/30 ">
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <p>(0)</p>
                                    </div>
                                    <p className="lg:text-2xl text-base lg:font-semibold font-normal ">${product.price} {product.originalPrice && <span className="text-sm font-thin"> <s> ${product.originalPrice} </s></span>}</p>
                                    <div className=" flex gap-2">
                                        {product.colors.map((item: any, index: number) =>
                                            <Button
                                                onClike={() => setImage(item.src)} key={index} className={`${image == item.src ? ' border border-black ' : 'border-none'} w-4 h-4 rounded-full`} style={{ backgroundColor: `${item.color}` }}
                                            >
                                            </Button>)}
                                    </div>
                                    <p className="text-sala text-ssc mb-4 lg:mb-9 lg:text-sm line-clamp-2">
                                        Quisque ut enim in arcu convallis feugiat vel id ipsum. Mauris nec magna elit. Aliquam quis
                                        lacus tincidunt, rhoncus justo in, bibendum dolor. Suspendisse felis velit
                                    </p>
                                    <div className="flex gap-5">
                                        <div className=" ">
                                            <MainButton onClick={handleAddToCart} >
                                                Add To Cart
                                            </MainButton>
                                        </div>
                                        <div onClick={AddToWishList} className="cursor-pointer p-2  rounded-sm hover:bg-main-color duration-300 text-black hover:text-white shadow-lg">
                                            {activewishlist ? (
                                                <XIcon className="w-8 h-full" />
                                            ) : (
                                                <IoMdHeartEmpty className="w-8 h-full" />
                                            )}
                                        </div>
                                        <div onClick={() => setShowModal(true)} className="cursor-pointer p-2  rounded-sm hover:bg-main-color duration-300 text-black hover:text-white shadow-lg">
                                            <BiSolidShow className="w-8 h-full " />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowProduct

