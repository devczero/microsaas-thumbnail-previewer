import Link from "next/link"
import AnimationContainer from "../global/animation-container"
import { Button } from "@/components/ui/button";
import ButtonGlowing from "./ButtonGlowingEffect";

export function Hero() {
    return (
        <div className="relative flex flex-col items-center space-y-20 md:space-y-40">
            <AnimationContainer className="flex flex-col items-center justify-center w-full">
                <div className="mt-12 md:mt-24 px-4 text-center">
                    <ButtonGlowing text={"Starting price available for 30% off!"} href={"#"}  />
                    <AnimationContainer delay={0.2}>
                        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">Thumbnail Previewer</h1>
                    </AnimationContainer>

                    <AnimationContainer delay={0.3}>
                        <p className="max-w-sm xl:max-w-xl opacity-90 text-lg sm:text-xl md:text-2xl text-center mb-8 mx-auto">
                            Preview your thumbnails in a realistic environment. In {" "} 
                            <span className="gradient-text">3 easy steps</span>
                        </p>
                    </AnimationContainer>

                    <AnimationContainer delay={0.4}>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button
                                variant="default"
                                size="lg"
                                asChild
                                className="gradient-button transition-transform hover:scale-105 text-foreground font-bold"
                            >
                                <Link href="/dashboard">Get Started</Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="w-full sm:w-auto"
                            >
                                <Link href="/pricing">View Pricing</Link>
                            </Button>
                        </div>
                    </AnimationContainer>
                </div>
            </AnimationContainer>

        </div>
    )
}