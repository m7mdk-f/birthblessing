import React, { ReactNode } from 'react'
import Motiondiv from './Motiondiv'

function MtionInViewSec({ children, className, delay }: { delay?: number, children: ReactNode, className?: string }) {
    return (
        <Motiondiv transition={{ duration: 1, delay: delay || 0 }}
            className={`${className}  `} initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
        >
            {children}
        </Motiondiv>
    )
}

export default MtionInViewSec