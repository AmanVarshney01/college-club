// import Bgicons from "@/app/home/Components/bgicons";
import MainTitle from "@/app/home/Components/maintitle";
// import Image from "next/image";
// import gla from 'public/admin-block.svg'

export default function HomeSection () {

    return (
        <section id="homepage" className={"min-h-[100svh] flex bg-transparent lg:px-4 lg:py-2 px-2 py-1"}>
            {/*<Bgicons/>*/}
            <div className={"self-end"}>
                <MainTitle />
            </div>
            {/*<Image className={"fixed bottom-0 right-0 w-1/2 opacity-90"} src={gla} alt={"gla"} />*/}
        </section>
    )
}