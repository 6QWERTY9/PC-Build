import { Layoutpage } from "@shared/components/layoutPage"
import { HeroSection } from "./sections/HeroSection"
import { AboutUsSection } from "./sections/aboutUsSection"
import { QuickStart } from "./sections/quickStart"

export const HomePage = () => {
    return (
        <Layoutpage>
            <HeroSection/>
            <AboutUsSection/>
            <QuickStart/>
        </Layoutpage>
    )
}