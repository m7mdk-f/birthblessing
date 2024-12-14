import React from 'react'

export default function InputCom({ value, className, type, placeholder, onChange }: { value?: any, className?: string; type?: string; placeholder?: string; onChange?: (e: React.ChangeEvent<HTMLElement>) => void }) {
  return (
    <input type={type || "text"} value={value} placeholder={placeholder || ""} onChange={onChange} className={`rounded-md border p-3 ${className || ""} bg-white outline-none active:outline-none`} name="" id="" />
  )
}
