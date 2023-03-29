import HomeSection from "@/app/home/HomeSection";
import MissionSection from "@/app/home/MissionSection";
import {PageWrapper} from "@/app/page-wrapper";

export default function Home() {

    return (
        // <ThemeProvider attribute="class" defaultTheme={"dark"} disableTransitionOnChange enableSystem={false}>
            <PageWrapper>
                <main id="container" className={""}>
                    <HomeSection/>
                    <MissionSection />
                </main>
            </PageWrapper>
        // </ThemeProvider>
    )
}
