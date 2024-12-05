import Link from "next/link"
import AnimationContainer from "../global/animation-container"
import { Check, DollarSign } from "lucide-react"

export function PricingLanding() {
    return (
        <section className="max-w-7xl mx-auto py-24 px-4 relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />

            <AnimationContainer
                delay={0.1}
                className="flex flex-col items-center max-w-xl mx-auto mb-16"
            >
                <div className="flex flex-row gap-6 items-center">
                    <h2 className="text-2xl font-medium text-primary tracking-wider">
                        Pricing
                    </h2>
                    <div className="p-2 bg-primary/5 rounded-xl">
                        <DollarSign/>
                    </div>
                </div>
                <p className="text-center text-lg text-muted-foreground/80">
                        One plan rules them all
                </p>
            </AnimationContainer>

            <AnimationContainer delay={0.2} className="flex justify-center w-full">
                <div className="space-y-6 w-full md:w-[500px] relative p-8 transition-all duration-300 bg-background/30 hover:bg-white/5
                                backdrop-blur-sm shadow-lg hover:shadow-xl rounded-2xl border border-white/10">
                        <p>Pay once, use for 1 year</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-semibold">$19.99</span>
                            <span className="text-muted-foreground">/year</span>
                        </div>

                        <div>
                            {['Unlimited upload', 'Save your channel information', 'Free updates'].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 text-muted-foreground space-y-2">
                                    <div className="rounded-full p-1 bg-primary/10 flex items-center justify-center">
                                        <Check className="h-4 w-4 text-primary" />
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/signup"
                            className="w-full inline-flex items-center justify-center rounded-xl px-4 py-3 transition-all duration-500
                                        bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/30"
                        >
                            Get Started
                        </Link>
                </div>
            </AnimationContainer>
        </section>
    )
}