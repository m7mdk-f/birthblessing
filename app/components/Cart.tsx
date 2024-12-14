"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import { products } from "./List";
import { AnimatePresence } from "framer-motion";
import Motiondiv from "./Motiondiv";
import Link from "next/link";

interface ProductItem {
    id: number;
    nameProd: string;
    src: string;
    number: number;
    price: number;
    oldPrice?: number;
}

const Cart = () => {
    const { getItem, setItem, stateCart, activeCart } = useAppContext();
    const [Card, setCard] = useState<{ id: number; number: number }[]>([]);
    const [cart, setCart] = useState<ProductItem[]>([]);
    const popupRef = useRef<HTMLDivElement | null>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(!stateCart());
    }, [stateCart]);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShow(false);
                activeCart(!stateCart())
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const storedCart = getItem("Cart") || [];
        setCard(storedCart);
    }, [getItem]);

    useEffect(() => {
        const DBProduct = Card.map(item => {
            const product = products.find(product => product.id === item.id);
            if (product) {
                return {
                    id: product.id,
                    nameProd: product.name,
                    src: product.image,
                    number: item.number,
                    price: product.price,
                    oldPrice: product.originalPrice,
                };
            }
            return null;
        }).filter(Boolean) as ProductItem[];

        setCart(DBProduct);
    }, [Card]);

    const handleRemoveItem = (id: number) => {
        const updatedCart = Card.filter(item => item.id !== id);
        setCard(updatedCart);
        setItem("Cart", updatedCart);
    };

    const handleQuantityChange = (id: number, delta: number) => {
        const updatedCart = Card.map(item =>
            item.id === id ? { ...item, number: Math.max(1, item.number + delta) } : item
        );
        setCard(updatedCart);
        setItem("Cart", updatedCart);
    };

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.number, 0);
    };


    return (
        <AnimatePresence mode="wait">
            {show && <Motiondiv
                ref={popupRef}
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                exit={{ y: -1000 }}
                transition={{ duration: 0.3 }} className="py-4  bg-white fixed right-10 z-10 shadow-lg rounded-lg w-full max-w-md">
                <div className="max-h-96 overflow-y-auto px-4 space-y-4">
                    {cart.length > 0 ? (
                        cart.map(item => (
                            <div key={item.id} className="flex items-start space-x-4 pb-4">
                                <div className="w-16 h-16 flex-shrink-0 relative bg-gray-200 rounded">
                                    <Image
                                        fill
                                        src={item.src}
                                        alt={item.nameProd}
                                        className="object-cover rounded"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-800 font-semibold">{item.nameProd}</h3>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex items-center">
                                            <div className="flex gap-2 flex-row-reverse text-base text-center border rounded-md px-2">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                    className="flex items-center justify-center"
                                                >
                                                    +
                                                </button>
                                                <p>{item.number}</p>
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                    className="flex items-center justify-center"
                                                >
                                                    −
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            {item.oldPrice && (
                                                <p className="text-gray-400 line-through">
                                                    ${item.oldPrice.toFixed(2)}
                                                </p>
                                            )}
                                            <p>${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 items-center">
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="text-black hover:text-red-700"
                                    >
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="border-t px-4 pt-4 mt-4">
                        <div className="flex justify-between text-lg font-semibold">
                            <p>Subtotal:</p>
                            <p>${calculateSubtotal().toFixed(2)}</p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <Link href="/shoppingcart" className="flex-1 bg-main-color text-center text-white py-2 rounded-lg hover:bg-black">
                                View Cart
                            </Link>
                            <Link href="" className="flex-1 bg-main-color text-center text-white py-2 rounded-lg hover:bg-black">
                                Check Out
                            </Link>
                        </div>
                    </div>
                )}
            </Motiondiv>
            }
        </AnimatePresence>
    );
};

export default Cart;
