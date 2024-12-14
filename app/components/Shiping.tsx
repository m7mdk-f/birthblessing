import React from 'react'

function Shiping({ className, classul }: { className?: string, classul?: string }) {
    return (
        <div>
            <section className={`${className || 'container '}`}>
                <h2 className="mb-2 text-lg md:text-xl font-bold">Shipping</h2>
                <ul className={`${classul|| '' } list-disc pl-8 mb-4 font-medium`}>
                    <li>Shipping within 1 to 7 business days</li>
                    <li>In-store collection available within 1 to 7 business days</li>
                    <li>Purchases are delivered in an box with a ribbon, with the exception of certain items</li>
                    <li>Next-day and Express delivery options also available</li>
                </ul>

                <h2 className="mb-2 text-lg md:text-xl font-bold">Return and Exchange</h2>
                <ul className={`${classul || ''} list-disc pl-8 mb-4 font-medium`}>
                    <li>Easy and complimentary, within 14 days</li>
                    <li>See conditions and procedure in our return</li>
                </ul>

            </section>
        </div>
    )
}

export default Shiping