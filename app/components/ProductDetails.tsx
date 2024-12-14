import React from 'react'

const ProductDetails = ({ name, price, originalPrice, details }: { name: any, price: any, originalPrice: any, details: any }) => {
    return (
        <div>
            <p className='text-sm text-gray-500 '>Birthblessing-toys</p>
            <p className='text-3xl my-3'>{name}</p>
            <p className='text-3xl font-semibold mb-4'>${price}.00
                {originalPrice &&
                    <span className="text-base font-light ml-3 text-gray-600 text-opositnew"><s>${originalPrice}.00</s></span>
                }
            </p>
            <div className='mb-12'>
                {details?.map((item:any, i:number) => <p key={i} className='text-sm text-gray-500 mb-4'>{item}</p>)}
            </div>
        </div>
    )
}

export default ProductDetails