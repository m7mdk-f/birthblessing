import React, { ReactNode } from 'react'
import Button from './Slider/Button'

export default function MainButton({ children, onClick, className, link }: { link?: string, className?: string, onClick?: () => void, children: ReactNode }) {
  return (
    <Button onClike={onClick} link={link} className={`${className || ''} hover:bg-main-color block  hover:text-white bg-white  text-black h-full px-4 shadow-lg`}>
      {children}
    </Button>
  )
}
