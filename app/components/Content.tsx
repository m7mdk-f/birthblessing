"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { BsFilterRight, BsGrid3X3Gap } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import Button from "./Slider/Button";
import { TbSortAscending2 } from "react-icons/tb";

import { Pagination } from "@/components/ui/pagination";
import Product from "./Product";
import { products } from "./List";


function Content({
    className,
    active,
    setActive,
    filterPro
}: {
    className?: string;
    active: boolean;
    setActive: React.Dispatch<SetStateAction<boolean>>;
    filterPro: any
}) {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [totalPages, setTotalPages] = useState(Math.ceil(products.length / itemsPerPage));
    const [currentProducts, setCurrentProducts] = useState(products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));

    useEffect(() => {
        if (filterPro.length <= itemsPerPage) {
            setCurrentPage(1)
        }
    }, [currentProducts])
    useEffect(() => {
        const calculatedTotalPages = Math.ceil(filterPro.length / itemsPerPage);
        setTotalPages(calculatedTotalPages);

        const calculatedCurrentProducts = filterPro.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
        setCurrentProducts(calculatedCurrentProducts);
    }, [filterPro, currentPage]);
    return (
        <div className={`${className} `}>
            <div className="flex justify-between items-center mb-4 border p-2 rounded-md">
                <div className="flex gap-1">
                    <Button
                        className={`${active ? "text-main-color" : "text-gray-500"} `}
                        onClike={() => {
                            setActive(!active);
                        }}
                    >
                        <BsGrid3X3Gap className="w-10 h-8" />
                    </Button>
                    <Button
                        className={`${active ? "text-gray-500" : "text-main-color"} `}
                        onClike={() => {
                            setActive(!active);
                        }}
                    >
                        <CiCircleList className="w-10 h-8" />
                    </Button>
                </div>
                <div className="justify-center items-center md:flex hidden  h-full text-center ">
                    <div className=" md:flex hidden gap-2 h-full ">
                        <h1 className="text-md font-semibold text-center flex justify-center items-center">
                            {products.length} Products
                        </h1>
                        <select className="border p-2 rounded">
                            <option>Best selling</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>
                <div className="md:hidden">
                    <Button onClike={() => setActive(!active)}>
                        <TbSortAscending2 className="-rotate-90 w-10 h-7 text-gray-500" />
                    </Button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
                {currentProducts.map((item, index) => (
                    <Product itemlist={item} key={index} />
                ))}
            </div>

            {/* Pagination Component */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default Content;
