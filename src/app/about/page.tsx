import TeamSection from "@/app/about/team/TeamSection";
import {PageWrapper} from "@/app/page-wrapper";

export default function Page () {

    return (
        <PageWrapper>
            <section className={"w-full bg-transparent min-h-screen"}>
                <TeamSection />
            </section>
        </PageWrapper>
    )
}