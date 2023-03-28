import TeamSection from "@/app/about/Components/TeamSection";
import {PageWrapper} from "@/app/page-wrapper";

export default function Page () {

    return (
        <PageWrapper>
            <section className={"bg-transparent"}>
                <TeamSection />
            </section>
        </PageWrapper>
    )
}