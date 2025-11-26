import { Layoutpage } from "@shared/components/layoutPage"
import { HeroSection } from "./sections/HeroSection"
import { AboutUsSection } from "./sections/aboutUsSection"

export const HomePage = () => {
    return (
        <Layoutpage>
            <HeroSection/>
            <AboutUsSection/>
        </Layoutpage>
    )
}