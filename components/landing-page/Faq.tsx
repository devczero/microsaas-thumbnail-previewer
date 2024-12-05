"use client"

import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import AnimationContainer from "../global/animation-container"

const faqs = [
    { question: "What is Thumbnail Previewer?", answer: "Thumbnail Previewer is a tool that lets you test and preview your thumnbail in realistic environment before publishing it to the world."},
    { question: "How does the preview system work?", answer: "You will select a file with your thumbnail and thats it. You can also fill data for the video card, to have it even more realistic, and then you can select between different screen sizes."},
    { question: "Is there a free plan available?", answer: "No, unfortunately we are currently not able to provide any free version of our application."}
]

export function Faq() {
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

    return (
         <div className="w-full max-w-[1400px] mx-auto py-32 px-4">
            <AnimationContainer delay={0.1}>
                <h2 className="mb-12 text-3xl sm:text-4xl md:text-6xl font-bold text-center tracking-tight opacity-90">FAQ</h2>
            </AnimationContainer>

            <div className="grid gap-4 md:grid-cols-3 mb-12">
                {faqs.map((faq, index) => (
                    <AnimationContainer
                        key={index}
                        delay={0.2 + index * 0.1}
                        className={`px-6 py-5 text-lf rounded-xl transition-all duration-500 cursor-pointer backdrop-blur-md
                            ${selectedQuestion === index ? "bg-primary/5 border-primary/20 shadow-lg shadow-primary/5"
                                : "bg-background/20 hover:bg-white/5 border-white/5 hover:border-white/10"} border`}
                        transition={{
                            duration: 0.3,
                            type: "spring",
                            stiffness: 200,
                            damping: 25
                        }}
                        onClick={() => setSelectedQuestion(index)}
                    >
                        <h3 className="text-lg font-light tracking-wide">{faq.question}</h3>
                    </AnimationContainer>
                ))}
            </div>

            <div className="relative h-[140px] flex items-center justify-center rounded-xl border border-white/5 bg-background/20 backdrop-blur-md">
                <AnimatePresence mode="wait">
                    {selectedQuestion !== null && (
                        <AnimationContainer
                            key={selectedQuestion}
                            initial={{ opacity: 0, y: 10}}
                            animate={{ opacity: 1, y: 0}}
                            exit={{ opacity: 0, y: -10}}
                            transition={{ duration: 0.4 }}
                            className="p-8"
                        >
                            <p className="text-base font-light tracking-wide text-foreground/90">
                                {faqs[selectedQuestion].answer}
                            </p>
                        </AnimationContainer>
                    )}
                    {selectedQuestion === null && (
                        <AnimationContainer>
                            <p className="text-base font-light tracking-wide text-foreground/90">
                                Select a question above
                            </p>
                        </AnimationContainer>
                    )}

                </AnimatePresence>
            </div>




         </div>
    )
}