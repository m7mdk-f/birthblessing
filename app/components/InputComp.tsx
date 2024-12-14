import React from 'react'

function InputComp({ type, name }: { type: string, name: string }) {
    return (
        <input
            id="name"
            name="name"
            type={type}
            placeholder={name}
            required
            className="mt-1 p-2 border border-gray-200 rounded-md  focus:outline-none"
        />
    )
}

export default InputComp