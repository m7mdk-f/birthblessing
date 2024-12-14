import React, { ReactNode } from 'react'

function ConcatDetails({ children }: { children: ReactNode }) {
    return (
        <div className="w-[60%] mx-auto sm:w-1/3 mb-8 sm:mb-0">
            <div className="sm:w-[70%] md:w-1/2 mx-auto flex flex-col items-center gap-2">
                {children}
            </div>
        </div>
    )
}

export default ConcatDetails