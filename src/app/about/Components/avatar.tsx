import photo from 'public/photo.png'
import Image from "next/image";
export default function Avatar () {
    return (
        <div className={"flex flex-row h-min justify-evenly"}>
            <div className="card w-72 bg-base-100 shadow-xl bg-transparent p-0 m-0 border-0 shadow-none">
                <figure><Image className={"mask mask-circle p-0 m-0"} src={photo} alt="person" /></figure>
                <div className="card-body place-items-center m-0 p-0 mt-4">
                    <h2 className="card-title">President</h2>
                    {/*<p>President</p>*/}
                    {/*<div className="card-actions justify-end">*/}
                    {/*    <button className="btn btn-primary">Buy Now</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}