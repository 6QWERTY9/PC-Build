import { Layoutpage } from "@shared/components/layoutPage"
import { HeroSection } from "./sections/HeroSection"
import { AboutUsSection } from "./sections/aboutUsSection"
import { QuickStart } from "./sections/quickStart"
import { AboutTraining } from "./sections/AboutTraining"

export const HomePage = () => {
    return (
        <Layoutpage>
            <HeroSection/>
            <AboutUsSection/>
            <QuickStart/>
            <AboutTraining/>
        </Layoutpage>
    )
}