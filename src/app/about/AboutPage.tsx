import Carousel from "@/app/about/Components/carousel";
import NameCard from "@/app/about/Components/namecard";
export default function AboutHome() {
    return (
        <main className={"bg-[#131200] px-4 py-8 h-screen grid gap-4 grid-cols-2"}>
            <div className={"grid grid-rows-2 place-items-center h-min"}>
                <div className={"mt-10 mx-10"}>
                    <Carousel />
                </div>
                <div className={"pb-10 px-10"}>
                    <p className={""}>GeeksforGeeks Student Chapter at GLA University

                        GeeksforGeeks Student Chapter at GLA University is a college club for students who are passionate about computer science and programming. The club aims to provide a platform for students to enhance their technical skills, learn new programming languages, and collaborate on coding projects.

                        Our club is affiliated with GeeksforGeeks, a leading online learning platform that provides resources and tutorials for computer science students around the world. As a member of our club, you will have access to GeeksforGeeks&apos; vast collection of coding challenges, online courses, and coding contests.

                        In addition to online resources, our club hosts regular coding workshops, coding competitions, and programming events. These events provide opportunities for students to learn from each other, share their coding projects, and network with industry professionals.

                        GeeksforGeeks Student Chapter at GLA University welcomes students of all skill levels, from beginners to experienced programmers. Whether you&apos;re looking to learn a new programming language, build your coding portfolio, or network with other students and professionals, our club has something to offer.</p>
                </div>
            </div>
            {/*<div className={"bg-green-300"}></div>*/}
            <div className={"grid grid-cols-2"}>
                <NameCard />
                <NameCard />
                <NameCard />
                <NameCard />
                <NameCard />
                <NameCard />
            </div>
        </main>
    )
}