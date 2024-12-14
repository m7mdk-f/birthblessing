"use client"
import "./globals.css";
import TopSlider from "./components/TopSlider";
import ProductCarousel from "./components/ProductCarousel";
import Card from "./components/Card";
import { cardList, listdown, listimage, NewsList, products, userInf } from "./components/List";
import ImageDiv from "./components/ImageDiv";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import User from "./components/User";
import Slider from "./components/Slider/Slider";
import React, { createContext, useState } from "react";
import BackGroundImageCont from "./components/BackGroundImageCont";
import HeaderHomePage from "./components/HeaderHomePage";
import Image from "next/image";
import Button from "./components/Slider/Button";
import Link from "next/link";
import MainButton from "./components/MainButton";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import ShowProduct from "./components/ShowProduct";
import MtionInViewSec from "./components/MtionInViewSec";

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

export default function Home() {

  const [product, setProduct] = useState(products[4])


  return (

    <main>
      <TopSlider />
      <Card listView={cardList} />
      <MtionInViewSec>
        <HeaderHomePage Title="Toprated Products" desc="Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn In Advance." />
        <ProductCarousel />
      </MtionInViewSec>

      <MtionInViewSec className="container grid pt-10 grid-cols-1 sm:grid-cols-5  gap-10  sm:h-screen " >
        <BackGroundImageCont backgroundImage="url('/images/sec3/animationsectionimg-1.webp')" Title="Beautiful Child Stationary Accessories" className="sm:col-span-3" desc="Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn In Advance." />
        <BackGroundImageCont backgroundImage="url('/images/sec3/animationsectionimg-2.webp')" Title="Amazing Soft Toys" className="sm:col-span-2" desc="Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn In Advance." />
        <BackGroundImageCont backgroundImage="url('/images/sec3/animationsectionimg-3.webp')" Title="Small Seat Sofa" className="sm:col-span-2" desc="Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn In Advance." />
        <BackGroundImageCont backgroundImage="url('/images/sec3/animationsectionimg-4.webp')" Title="Latest Toy House For Your Children" className="sm:col-span-3" desc="Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn In Advance." />
      </MtionInViewSec>


      <MtionInViewSec>
        <HeaderHomePage Title="Special Products" desc="Interesting Features Is Rich And Colorful, Each Button To Bring A Surprise To The Baby Introduction To Give Your Child Learn In Advance." />
        <ShowProduct product={product} />
      </MtionInViewSec>

      <MtionInViewSec>
        <Slider delay={1000} number={7} containerclass="container py-10" spaceBetween={10} headerDivBut="hidden" className="h-36" enableAutonPlay>
          {listimage.map((item, index) => {
            return <ImageDiv key={index} listImage={item} />
          })}
        </Slider>
      </MtionInViewSec>


      <MtionInViewSec className="bg-secend container  pt-12">
        <h2 className="text-3xl text-center font-bold text-black mb-6">Our Testimonial</h2>
        <Slider className="mb-10 " containerclass="group" iconpre={<GrFormPreviousLink />} iconnext={<GrFormNextLink />} iconClass="w-7 h-7" classButton="bg-white border rounded-lg p-1 shadow-md " divClass=" w-full px-10 h-full absolute top-0 left-0 group-hover:opacity-100 opacity-0 duration-300  pointer-events-none  z-10   " insideDiv="flex justify-between h-[80%] items-center ">
          {userInf.map((item, index) => (
            <User key={index} listuser={item} />
          ))}
        </Slider>
      </MtionInViewSec>


      <MtionInViewSec>
        <HeaderHomePage Title="latest blog" desc="Interesting features is rich and colorful, each button to bring a surprise to the baby Introduction to give your child learn in advance." />
        <Slider goback={true} className="container mx-auto flex  justify-between pt-3 flex-wrap" iconpre={<GrFormPreviousLink />} divClass="flex md:absolute pointer-events-none justify-center md:justify-end  md:items-start items-center pt-5 md:p-7  -top-32 rigth-0 w-full h-full z-10 " divcontainSlid={false} iconClass="w-10 h-10" iconnext={<GrFormNextLink />} classButton="p-0.5 rounded-lg bg-white shadow-lg" number={1}  >
          {NewsList.map((item, index) => {
            return (
              <div key={index} className="w-full md:h-[50vh] md:flex-row flex-col flex gap-3 ">
                <div className="md:w-1/2 w-full md:h-full h-[50vh] relative">
                  <Link href={`/newsdetails/${item.id}`} >
                    <Image fill src={item.image} alt="" className="object-cover rounded-xl" />
                  </Link>
                </div>
                <div className="md:flex justify-center md:w-1/2 h-full items-center">
                  <div className="flex flex-col gap-3 ">
                    <Link href="/news" className="lg:text-3xl font-bold text-xl line-clamp-1">{item.title}</Link>
                    <p className="  text-gray-600 line-clamp-3">{item.desc}</p>
                    <div className="flex gap-5 flex-wrap">
                      <div className="flex gap-0.5  justify-center items-center">
                        <MdOutlineCalendarMonth className="w-5 h-5 text-gray-600 " />
                        <p>Feb 08, 2022</p>
                      </div>
                      <div className="flex gap-0.5">
                        <FaRegUser className="w-4 h-4 text-gray-600 mt-0.5" />
                        <p>Romit Gabani</p>
                      </div>
                    </div>
                    <div>
                      <Link className="inline-block px-8   hover:bg-black duration-500 md:text-base py-3 rounded-2xl text-white bg-main-color mt-5 hover:text-white" href="/news">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </MtionInViewSec>

    </main>
  );
}
