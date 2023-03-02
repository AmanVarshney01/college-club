export default function EventLabel({name} : {name: string}) {
    return (
        <div className={"w-full h-20 rounded-2xl mb-4 grid place-content-center font-mono"}><span className={"text-white text-2xl"}>{name}</span></div>
    )
}