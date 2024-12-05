"use client"

import Image from "next/image"
import app from "@/app/assets/1.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Demo() {
    const appImageRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: appImageRef,
        offset: ["start end", "end start"]
    })


    const rotateX = useTransform(scrollYProgress, [0,1], [14,-10])
    const opacity = useTransform(scrollYProgress, [0,1], [0, 2])

    return (
        <div className="text-foreground py-20 sm:py-24 max-w-[1400px] mx-auto">
            <h2 className="mt-24 text-center text-5xl sm:text-6xl font-bold opacity-90">Test your thumbnails without limits</h2>
            <p className="text-xl text-center mt-5 text-foreground/80">Review your thumbnails on desktop, tablet or mobile UIs</p>
            <motion.div
                ref={appImageRef}
                style={{
                    opacity: opacity,
                    rotateX: rotateX,
                    transformPerspective: "700px"
                }}
                className="w-[300px] mx-auto md:w-full mt-14 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-foreground/10"
            >
                <Image
                    src={app}
                    alt="app demo"
                    className="w-full h-auto"
                />
            </motion.div>
        </div>
    )
}