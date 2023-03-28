import Image from "next/image";
// import instagram from 'public/socialIcons/instagram.png'
// import whatsapp from 'public/socialIcons/whatsapp.png'
// import LinkedIn from 'public/socialIcons/linkedin.png'
export default function Avatar({name, post, photo}: { name: string, post: string, photo: any }) {
    return (
        <div className={"lg:w-72 w-32 flex-shrink-0 bg-white relative group shadow shadow-black rounded-t-md"}>
            <Image placeholder={'blur'} loading="lazy" className={"bg-cover rounded-t-md"} src={photo} alt={name}/>
            <div className={"bg-transparent"}>

            </div>
        </div>)
}


{/*<div className={"absolute bottom-0 w-full opacity-70 blur-sm bg-black"}></div>*/}
{/*<div className={"flex flex-row justify-evenly w-full px-6 border-t pt-4"}>*/}
{/*    <a id="linkCursor" href="src/app/about/team/Components#" className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image loading="lazy" width={25} height={25} src={instagram} alt={"instagram"} /></a>*/}
{/*    <a id="linkCursor" href="src/app/about/team/Components#" className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image loading="lazy" width={25} height={25} src={linkedIn} alt={"linkedin"} /></a>*/}
{/*    <a id="linkCursor" href="src/app/about/team/Components#" className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image loading="lazy" width={25} height={25} src={whatsapp} alt={"whatsapp"} /></a>*/}
{/*</div>*/}