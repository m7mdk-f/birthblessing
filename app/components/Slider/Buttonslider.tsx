import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import Button from './Button';
import SwiperType from "swiper";
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';

function Buttonslider({ insideDiv, headerDivBut, childrenposion = "center", swipervalue, iconClass, divClass, goback = false, children, classButton, hoverBut, iconnext, iconpre, divcontainSlid }: { insideDiv?: string, headerDivBut?: string, childrenposion?: string, swipervalue: SwiperType | null, iconClass?: string, divClass?: string, goback?: boolean, children?: ReactNode, classButton?: string, hoverBut?: string, iconnext?: ReactElement, iconpre?: ReactElement, divcontainSlid?: boolean }) {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    useEffect(() => {
        if (swipervalue) {
            setIsBeginning(swipervalue.isBeginning);
            setIsEnd(swipervalue.isEnd);
            const onSlideChange = () => {
                setIsBeginning(swipervalue.isBeginning);
                setIsEnd(swipervalue.isEnd);
            };
            swipervalue.on('slideChange', onSlideChange);
        }
    }, [swipervalue]);
    return (
        <div className={`${headerDivBut || 'justify-between'} flex`}>
            {childrenposion?.trim().toLocaleLowerCase() === 'top' ? children : ""}
            <div className={`${divClass || ' items-center flex  justify-between p-3 '} ${divcontainSlid && 'w-full h-full  absolute top-0 left-0 z-10 pointer-events-none'}`}>
                <div className={`${insideDiv || 'flex gap-3'} `}>
                    <Button
                        onClike={() => {
                            swipervalue?.isBeginning && goback ? swipervalue.slideTo(swipervalue.slides.length - 1) : swipervalue?.slidePrev()
                        }}
                        className={`${classButton || "rounded - md w-8 h-8 bg-gray-300 "} text-center flex  justify-center items-center ${isBeginning && !goback ? 'opacity-50  cursor-not-allowed hover:opacity-50' : `${hoverBut || 'hover:text-white hover:bg-main-color pointer-events-auto cursor-pointer '} `}`}
                    >
                        {iconpre && React.cloneElement(iconpre, { className: ` ${iconClass || 'w-5 h-5'}` }) || <GrFormPrevious className={` ${iconClass || 'w-5 h-5'}`} />}
                    </Button>
                    {childrenposion?.trim().toLocaleLowerCase() === 'center' ? children : ""}
                    <Button
                        onClike={() => {
                            swipervalue?.isEnd && goback ? swipervalue.slideTo(0) : swipervalue?.slideNext();
                        }}
                        className={`${classButton || "rounded - md w-8 h-8 bg-gray-300 "} text-center flex   justify-center items-center ${isEnd && !goback ? 'opacity-50  cursor-not-allowed hover:opacity-50' : `${hoverBut || 'hover:text-white hover:bg-main-color pointer-events-auto cursor-pointer'} `}`}
                    >
                        {iconnext && React.cloneElement(iconnext, { className: ` ${iconClass || 'w-5 h-5'}` }) || <MdNavigateNext className={` ${iconClass || 'w-5 h-5'}`} />}
                    </Button>
                </div >
            </div>
        </div>
    );
}

export default Buttonslider;
