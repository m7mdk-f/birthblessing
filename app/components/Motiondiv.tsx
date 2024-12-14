import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Motiondiv({ children, initial, exit, animate, className, ref, style, transition, whileInView }: { whileInView?: any, transition?: any, style?: any, ref?: any, className?: string, children: ReactNode, initial: any, exit?: any, animate?: any }) {
    return (
        <motion.div
            ref={ref}
            className={className}
            whileInView={whileInView}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            style={style}
        >
            {children}
        </motion.div>
    )
}

export default Motiondiv