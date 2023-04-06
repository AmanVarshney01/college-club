import Avatar from "@/app/about/Components/Avatar";

export default function TeamSection () {
    return (
        <section className={"px-8"}>
            <h2 className={"text-6xl font-semibold"}>Meet Our Team</h2>
            <div className={" bg-transparent flex flex-row flex-wrap w-full justify-between"}>
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
        </section>
    )
}