import React from 'react'
import Button from './Slider/Button'
import Image from 'next/image'

function ImageDiv({ listImage }: { listImage: { image: string, link: string } }) {
    return (
        <>
            <div className="relative w-full h-36">
                <Button link={listImage.link}>
                    <Image src={listImage.image} className='object-contain' alt="" fill />
                </Button>
            </div>
        </>

    )
}

export default ImageDiv