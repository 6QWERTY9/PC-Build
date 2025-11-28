import { Layoutpage } from "@shared/components/layoutPage"
import { HeroSection } from "./sections/HeroSection"
import { AboutUsSection } from "./sections/aboutUsSection"
import { QuickStart } from "./sections/quickStart"
import { AboutTraining } from "./sections/AboutTraining"
import { Partners } from "./sections/partners"
import { TrainingProgramSection } from "./sections/TrainingProgramSection"
import { Teacherssection } from "./sections/teachersSection"

export const HomePage = () => {
    return (
        <Layoutpage>
            <HeroSection/>
            <AboutUsSection/>
            <QuickStart/>
            <AboutTraining/>
            <Partners/>
            <TrainingProgramSection/>
            <Teacherssection/>
        </Layoutpage>
    )
}