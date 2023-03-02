import Carousel from "@/app/about/Components/carousel";
export default function AboutHome() {
    return (
        <main className={"bg-[#EAEAEA] px-4 py-8 h-screen grid gap-4 grid-cols-2"}>
            <div>
                <Carousel />
                <p>geeksforgeeks description</p>
            </div>
            {/*<div className={"bg-green-300"}></div>*/}
            <div className={"flex flex-row h-min justify-evenly"}>
                <div className="card w-96 bg-base-100 shadow-xl bg-transparent">
                    <figure><img className={"mask mask-pentagon"} src="/photo.png" alt="person" /></figure>
                    <div className="card-body place-items-center">
                        <h2 className="card-title">President</h2>
                        {/*<p>President</p>*/}
                        {/*<div className="card-actions justify-end">*/}
                        {/*    <button className="btn btn-primary">Buy Now</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-transparent">
                    <figure><img className={"mask mask-pentagon"} src="/photo.png" alt="person" /></figure>
                    <div className="card-body place-items-center">
                        <h2 className="card-title">President</h2>
                        {/*<p>President</p>*/}
                        {/*<div className="card-actions justify-end">*/}
                        {/*    <button className="btn btn-primary">Buy Now</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-transparent">
                    <figure><img className={"mask mask-pentagon"} src="/photo.png" alt="person" /></figure>
                    <div className="card-body place-items-center">
                        <h2 className="card-title">President</h2>
                        {/*<p>President</p>*/}
                        {/*<div className="card-actions justify-end">*/}
                        {/*    <button className="btn btn-primary">Buy Now</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-transparent">
                    <figure><img className={"mask mask-pentagon"} src="/photo.png" alt="person" /></figure>
                    <div className="card-body place-items-center">
                        <h2 className="card-title">President</h2>
                        {/*<p>President</p>*/}
                        {/*<div className="card-actions justify-end">*/}
                        {/*    <button className="btn btn-primary">Buy Now</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl bg-transparent">
                    <figure><img className={"mask mask-pentagon"} src="/photo.png" alt="person" /></figure>
                    <div className="card-body place-items-center">
                        <h2 className="card-title">President</h2>
                        {/*<p>President</p>*/}
                        {/*<div className="card-actions justify-end">*/}
                        {/*    <button className="btn btn-primary">Buy Now</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </main>
    )
}