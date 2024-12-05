"use client"
import Image from "next/image"
import {motion} from "framer-motion"
import thumbnail1 from "@/app/assets/1a.png"
import thumbnail2 from "@/app/assets/2a.png"
import thumbnail3 from "@/app/assets/3a.png"
import thumbnail4 from "@/app/assets/4a.png"
import thumbnail5 from "@/app/assets/5a.png"
import thumbnail6 from "@/app/assets/6a.png"
import thumbnail7 from "@/app/assets/3a.png"
import thumbnail8 from "@/app/assets/4a.png"

export function CallToAction() {
    return (
        <div className="relative w-full py-40 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]
                            bg-[size:3rem_3rem] opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />

            <div className="relative z-10 px-4 h-[220px]">
                <div className="absolute top-[-50%] left-0 w-full h-[1500px] mx-auto">
                    <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 90,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6, thumbnail7, thumbnail8].map((thumbnail, index) => {
                            const angle = (index / 4) * 2 * Math.PI
                            const radius = 650
                            return (
                                <div
                                    key={index}
                                    className="absolute"
                                    style={{
                                        transform: `translate(-50%, -50%) rotate(${(angle * 90) / Math.PI}deg) translate(${radius}px)`,
                                    }}
                                >
                                    <div className="relative w-[340px] group rotate-90">
                                        <Image
                                            src={thumbnail}
                                            alt="thumnbail"
                                            className="w-full h-full object-cover opacity-90"
                                        />
                                    </div>

                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>

            <div className="text-center space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Test your Thumbnails
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                    Experience your thumbnails in a dynamic preview environment before going live.
                </p>
            </div>

        </div>
    )
}