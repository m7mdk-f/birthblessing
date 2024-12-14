"use client"
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "./Slider/Slider";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Product from "./Product";
import { products } from "./List";

const ProductCarousel = () => {

    return (
        <Slider className="w-full relative container" iconpre={<GrFormPreviousLink />} divClass="flex md:absolute pointer-events-none   justify-center md:justify-end  md:items-start items-center pt-5 md:p-7  -top-32 rigth-0 w-full h-full z-10 " divcontainSlid={false} iconClass="w-7 h-7" iconnext={<GrFormNextLink />} number={4}  >
            {products.map((item, index) => (
                <Product itemlist={item} key={index} />
            ))}
        </Slider>
    );
};


export default ProductCarousel;
