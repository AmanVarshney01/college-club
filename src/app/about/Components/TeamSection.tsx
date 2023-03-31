import Avatar from "@/app/about/Components/Avatar";

export default function TeamSection () {
    return (
        <section className={"min-h-screen w-full bg-transparent grid grid-cols-3 gap-y-32 place-items-center"}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
        </section>
    )
}