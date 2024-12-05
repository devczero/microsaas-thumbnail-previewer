import Link from "next/link"
import AnimationContainer from "../global/animation-container"

export function Footer() {
    return (
        <footer className="mb-12 relative border-t border-border/40 pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full bg-gradient-to-b from-transparent
                            to-background/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-12 xl:grid-cols-3 xl:gap-8">
                    <AnimationContainer delay={0.1}>
                        <span className="text-xl font-bold">Thumbnail Previewer</span>
                    </AnimationContainer>

                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <AnimationContainer delay={0.2}>
                                <h3 className="text-sm font-semibold text-foreground">
                                    Previewer
                                </h3>
                                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                    <li>
                                        <Link href="#" className="hover:text-primary transition-colors duration-200">Steps</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-primary transition-colors duration-200">Pricing</Link>
                                    </li>
                                </ul>
                            </AnimationContainer>
                            <AnimationContainer delay={0.3}>
                                <h3 className="text-sm font-semibold text-foreground">
                                    Socials
                                </h3>
                                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                    <li>
                                        <Link href="#" className="hover:text-primary transition-colors duration-200">Facebook</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-primary transition-colors duration-200">Instagram</Link>
                                    </li>
                                </ul>
                            </AnimationContainer>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <AnimationContainer delay={0.4}>
                                <h3 className="text-sm font-semibold text-foreground">
                                    Contact
                                </h3>
                                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                    <li>
                                        <Link href="#" className="hover:text-primary transition-colors duration-200">Support</Link>
                                    </li>
                                </ul>
                            </AnimationContainer>
                            <AnimationContainer delay={0.5}>
                                <h3 className="text-sm font-semibold text-foreground">
                                    About Us
                                </h3>
                                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                    <li>
                                        <Link href="#" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-primary transition-colors duration-200">Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </AnimationContainer>
                        </div>
                    </div>

                </div>

            </div>

        </footer>
    )
}