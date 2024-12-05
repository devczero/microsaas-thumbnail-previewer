"use client"

import { motion, AnimationProps } from "framer-motion"

interface AnimationContainerProps {
    children: React.ReactNode;
    delay?: number;
    reverse?: boolean;
    className?: string;
    animate?: AnimationProps["animate"];
    initial?: AnimationProps["initial"];
    exit?: AnimationProps["exit"];
    mode?: string;
    transition?: AnimationProps["transition"];
    onClick?: () => void;
}

const AnimationContainer = ({
    children,
    className,
    reverse,
    delay,
    animate,
    initial,
    exit,
    transition,
    onClick
}: AnimationContainerProps) => {
    return (
        <motion.div
            className={className}
            initial={initial || { opacity: 0, y: reverse ? -20 : 20}}
            animate={animate || { opacity: 1, y: 0}}
            exit={exit}
            viewport={{once:false}}
            transition={transition || {
                duration: 0.2,
                delay: delay,
                ease: "easeInOut",
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}

export default AnimationContainer