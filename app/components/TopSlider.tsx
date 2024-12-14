import React from 'react'
import Button from './Slider/Button'
import Slider from './Slider/Slider'
import { sliderContain } from './List'
import { SwiperSlide } from 'swiper/react'

function TopSlider() {
    return (
        <Slider shownumer={true} className="w-full md:h-[90vh] h-[50vh] " containerclass='mb-10' goback={true} divClass="flex  items-end  justify-end gap-4 p-6 " divcontainSlid={true} classButton="text-black" iconClass="w-8 h-8" enableAutonPlay={true} delay={7000}>
            {sliderContain.map((item, index) => {
                return (
                    <div key={index} className="bg-black/20 w-full h-full " style={{ backgroundImage: `url('${item.backgrounImage}')`, backgroundSize: "100% 100%" }}>
                        <div className="container flex items-center h-full md:my-auto">
                            <div className="lg:w-1/2 text-center lg:text-left flex flex-col gap-4">
                                <h2 className="text-blue-950  font-bold text-2xl  line-clamp-2 ">
                                    {item.text}
                                </h2>
                                <h1 className="md:text-4xl text-lg lg:text-5xl font-extrabold line-clamp-3 text-gray-900 leading-tight">
                                    {item.title}
                                </h1>
                                <p className="text-gray-600 text-sm lg:text-base line-clamp-3 ">
                                    {item.descrption}
                                </p>
                                <Button link="/collections" className="bg-main-color w-1/2 lg:ml-0 mx-auto hover:text-black hover:bg-white text-white py-3 px-6 rounded-lg shadow-md  transition">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default TopSlider