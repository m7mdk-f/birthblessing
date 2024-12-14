import React from 'react'
import Button from '../Slider/Button';

function ListButtondown({ list, className }: { list: { text: string; link: string }[]; className: string }) {
    return (
        <>
            {list.map((item, index) => {
                return <div key={index} className=' text-base leading-10 font-medium '>
                    <Button link={item.link} className={className}>
                        {item.text}
                    </Button>
                </div>
            })}
        </>
    )
}

export default ListButtondown