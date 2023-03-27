// import Bgicons from "@/app/home/Components/bgicons";
import MainTitle from "@/app/home/Components/maintitle";
import Navbar from "@/app/home/Components/navbar";
// import Image from "next/image";
// import gla from 'public/admin-block.svg'

export default function HomeSection () {

    return (
        <section id="homepage" className={"min-h-screen flex flex-col justify-between items-center bg-transparent px-4 py-2"}>
            {/*<Bgicons/>*/}
            <Navbar/>
            <div className={" h-full w-full"}>
                <MainTitle />
            </div>
            {/*<Image className={"fixed bottom-0 right-0 w-1/2 opacity-90"} src={gla} alt={"gla"} />*/}
        </section>
    )
}