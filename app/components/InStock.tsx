import React from 'react'

const InStock = ({ stock }: { stock: number }) => {
    return (
        <>
            {stock > 0 &&
                <div className='my-4'>
                    <p className='text-green-700 before:p-1 before:bg-green-700 before:inline-block before:rounded-full before:mr-2'>In stock ({stock} units), ready to be shipped</p>
                    <div className='bg-gray-300 rounded-2xl p-0.5 mt-2 relative'>
                        <div style={{ width: `${stock}%` }} className='bg-green-700 absolute left-0 inset-y-0 duration-300 rounded-2xl'></div>
                    </div>
                </div>
            }
        </>
    )
}

export default InStock