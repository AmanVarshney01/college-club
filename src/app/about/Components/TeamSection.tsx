import Avatar from "@/app/about/Components/Avatar";

export default function TeamSection () {
    return (
        <section className={"px-8 flex flex-col justify-center items-center w-full"}>
            <h2 className={"text-6xl text-center"}>Meet Our Team</h2>
            <br/>
            <div className={" bg-transparent grid place-content-center grid-cols-3"}>
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