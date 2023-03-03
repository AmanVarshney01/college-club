"use client";
import Image from "next/image";
import photo from 'public/photo.png'
import {useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";

export default function Carousel() {

    const slides = [
        {
            image: photo,
        },
        {
            image: photo,
        },
        {
            image: photo,
        },
        {
            image: photo,
        },
        {
            image: photo,
        },
        {
            image: photo,
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className={"max-w-[1400px] h-[700px] w-full m-auto py2-16 px-4 relative group"}>
            <div className={"w-full h-full bg-center bg-cover duration-500"}>
                <Image className={"rounded-2xl"} src={slides[currentIndex].image} alt={"photo"} />
            </div>
            <div>
                <BsChevronCompactLeft onClick={prevSlide} size={30} className={"hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"} />
            </div>
            <div>
                <BsChevronCompactRight size={30} className={"hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"} />
            </div>
        </div>
    )
}