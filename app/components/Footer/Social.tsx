import React, { ReactElement } from 'react'
import Button from '../Slider/Button'
import Link from 'next/link'

function Social({ icon, link, className, iconClass }: { icon: ReactElement; link?: string; className: string; iconClass?: string }) {
    let item = React.cloneElement(icon, { className: `${iconClass} text-black` });
    return (
        <div className='ml-2'>
            <Button link={link} className={className}>
                {item}
            </Button>
        </div>
    )
}

export default Social