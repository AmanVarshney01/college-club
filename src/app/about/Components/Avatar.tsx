import Image from "next/image";
// import instagram from 'public/socialIcons/instagram.png'
// import whatsapp from 'public/socialIcons/whatsapp.png'
// import LinkedIn from 'public/socialIcons/linkedin.png'
export default function Avatar({name, post, photo}: { name: string, post: string, photo: any }) {
    return (
        <div className={"lg:w-72 w-32 flex-shrink-0 bg-white relative group shadow shadow-black rounded-t-md"}>
            <Image placeholder={'blur'} className={"bg-cover rounded-t-md"} src={photo} alt={name}/>
            <div className={"bg-transparent"}>

            </div>
        </div>)
}
