"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { products } from "./List";
import Motiondiv from "./Motiondiv";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ProductItem {
    id: number;
    nameProd: string;
    src: string;
    number: number; // Quantity for display
}

function CartPopup() {
    const { getItem, stateCart } = useAppContext();
    const [show, setShow] = useState(false);
    const [productShow, setProductShow] = useState<ProductItem | null>(null);
    const previousCart = useRef<ProductItem[] | null>(null);
    const popupRef = useRef<HTMLDivElement | null>(null);

    const [number, setNumber] = useState<number | 0>(0);
    const [cart, setCart] = useState<ProductItem[]>([]);
    let i = useRef(0)

    useEffect(() => {
        setShow(false)
        // i.current = 0
    }, [stateCart])
    useEffect(() => {
        const cartData = getItem("Cart") || [];
        setCart(cartData);
    }, [getItem]);

    useEffect(() => {
        i.current++;
        if (i.current > 2) {
            if (!cart.length) {
                setProductShow(null);
                setShow(false);
                return;
            }
            const handlePopup = (product: ProductItem) => {
                setShow(false);
                setTimeout(() => {
                    setProductShow(product);
                    setShow(true);
                }, 0);
            };

            const previousCartItems = previousCart.current || [];

            const newOrUpdatedProduct = cart.find((currentItem) => {
                const previousItem = previousCartItems.find((item) => item.id === currentItem.id);
                return !previousItem || previousItem.number !== currentItem.number; // New or quantity updated
            });

            if (newOrUpdatedProduct) {
                const matchedProduct = products.find((item) => item.id === newOrUpdatedProduct.id);
                if (matchedProduct) {
                    const product = {
                        id: matchedProduct.id,
                        nameProd: matchedProduct.name,
                        src: matchedProduct.image,
                        number: newOrUpdatedProduct.number,
                    };
                    setNumber(cart.reduce((sum, item) => sum + item.number, 0)); // Update total quantity
                    handlePopup(product);
                }
            }
        }

        previousCart.current = cart; // Update the ref after processing
    }, [cart]);

    useEffect(() => {
        if (window !== undefined) {
            if (i.current == 2) {
                i.current = 1
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShow(false); // Close the popup
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <AnimatePresence mode="wait">
                {show && (
                    <Motiondiv
                        ref={popupRef}
                        initial={{ y: -1000 }}
                        animate={{ y: 0 }}
                        exit={{ y: -1000 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-12 right-4 z-50 bg-white shadow-lg rounded-lg p-4 w-80"
                    >
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <p className="text-gray-600 font-bold">✔ Item added to your cart</p>
                            <button
                                className="black hover:text-gray-600 transition"
                                onClick={() => setShow(false)}
                            >
                                ✖
                            </button>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 overflow-hidden bg-gray-200 rounded-lg flex-shrink-0 relative">
                                {productShow?.src && (
                                    <Image fill alt={productShow.nameProd} src={productShow.src} />
                                )}
                            </div>
                            <div className="ml-4">
                                <p className="text-gray-800 font-medium line-clamp-1">
                                    {productShow?.nameProd}
                                </p>
                                <p className="text-gray-600 text-sm">Quantity: {productShow?.number}</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Link href="/shoppingcart" className="bg-main-color text-center text-white py-2 rounded-lg hover:bg-black duration-300">
                                View My Cart ({number})
                            </Link>
                            <button className="bg-main-color text-white py-2 rounded-lg hover:bg-black duration-300">
                                Check Out
                            </button>
                            <Link href="/collections/products" className="hover:opacity-90  duration-300 self-center text-center underline text-base">
                                Continue shopping
                            </Link>
                        </div>
                    </Motiondiv>
                )}
            </AnimatePresence>
        </div>
    );
}

export default CartPopup;
