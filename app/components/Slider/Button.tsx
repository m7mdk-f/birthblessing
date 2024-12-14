"use client";
import Link from 'next/link';
import React, { CSSProperties, ReactNode } from 'react'

function Button({ className, children, link, onClike, style, ref }: { ref?: any, className?: string; children?: ReactNode; link?: string, onClike?: (e: React.MouseEvent<HTMLButtonElement>) => void, style?: CSSProperties }) {
  return (
    <button
      ref={ref}
      style={style}
      onClick={onClike || undefined}
      className={` ${className}  hover:opacity-90 duration-500`}>
      {link != "" && link != null ? <Link href={link}>{children || ""}</Link> : children}
    </button >
  )
}

export default Button