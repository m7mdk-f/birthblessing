import React, { ReactElement } from 'react'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import Button from '../Slider/Button'
import Link from 'next/link'
import Social from './Social'
import { SocialContent } from '../List'



function SocialMedia({ list, className, iconClass, classNameCont }: { classNameCont?: string, list: { icon: ReactElement; link: string }[]; className?: string; iconClass?: string }) {
    return (
        <div className={`${classNameCont || 'gap-3'} flex  my-3`}>
            {list.map((item, index) => {
                return <Social iconClass={iconClass} className={`${className || ""}`} key={index} icon={item.icon} link={item.link} />
            })}
        </div>
    )
}

export default SocialMedia