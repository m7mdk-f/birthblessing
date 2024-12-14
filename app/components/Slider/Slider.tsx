"use client"
import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperType from 'swiper';
import Buttonslider from './Buttonslider';
import { Autoplay } from 'swiper/modules';

// swipervalue, 
// iconClass ?: string, divClass: string, goback ?: boolean, children ?: ReactNode, classButton ?: string, hoverBut ?: string, iconnext ?: ReactElement, iconpre ?: ReactElement
export default function Slider({ spaceBetween, slidesView, insideDiv, childrenposion = 'center', containerclass, headerDivBut, shownumer = false, number = 1, className, children, childrenBut, iconClass, divClass, goback = false, classButton, hoverBut, iconnext, iconpre, enableAutonPlay = false, delay, divcontainSlid = false }: { slidesView?: any, spaceBetween?: Number, containerclass?: string, insideDiv?: string, childrenposion?: string, headerDivBut?: string, shownumer?: boolean, enableAutonPlay?: boolean, children: ReactNode[], className?: string, number?: Number, childrenBut?: ReactNode, iconClass?: string, divClass?: string, goback?: boolean, classButton?: string, hoverBut?: string, iconnext?: ReactElement, iconpre?: ReactElement, delay?: number, divcontainSlid?: boolean }) {
    const [swiper, setSwiper] = useState<SwiperType | null>()
    const [numberdiv, setnumber] = useState(1)
    const [end, setEndValue] = useState(0)
    useEffect(() => {

        swiper?.on("slideChange", () => {
            setnumber(swiper.realIndex + 1)
        })
    }, [swiper])

    const slidpreview: Record<number, { slidesPerView: number }> = {};
    let number2 = 0
    for (let i = 0; i < number.valueOf(); i++) {
        if (i == 0) {
            slidpreview[i] = { slidesPerView: 1 };
        }
        else {
            if (number2 == 0) {
                number2 += 1400 / number.valueOf() + 1400 % number.valueOf()
            }
            number2 += 1400 / number.valueOf() + 1400 % number.valueOf()

            slidpreview[number2] = { slidesPerView: i + 1 };
        }
    }
    return (

        <div className={`${childrenposion == 'top' ? 'flex flex-col-reverse' : ''} ${containerclass || ""}    w-full relative`}>
            <Swiper
                autoplay={enableAutonPlay ? { delay: delay || 3000 } : false}
                effect="cube" // Transition effect: "fade", "slide", "cube", etc.
                speed={700}
                spaceBetween={spaceBetween?.valueOf() || 50}
                modules={enableAutonPlay ? [Autoplay] : []}
                slidesPerView={number.valueOf()}
                breakpoints={
                    slidesView ? slidesView : slidpreview
                }
                // onSlideChange={() => }
                onSwiper={(swiper) => {
                    setSwiper(swiper)
                    setEndValue(swiper.slides.length)
                }}
                className={`${className || 'w-full'}  relative `}
            >
                {children.map((card, i) => {
                    return (
                        <SwiperSlide key={i}>
                            {card}
                        </SwiperSlide>
                    )
                })}

            </Swiper>

            <Buttonslider insideDiv={insideDiv} childrenposion={childrenposion} headerDivBut={headerDivBut} divcontainSlid={divcontainSlid} goback={goback} classButton={classButton} hoverBut={hoverBut} iconpre={iconpre} iconnext={iconnext} iconClass={iconClass} swipervalue={swiper || null} divClass={divClass} >
                {childrenBut}
                {shownumer ? <div className={`${iconClass} flex justify-center items-center`}>{numberdiv}/{end}</div> : ""}
            </Buttonslider>



        </div>

    )
}

