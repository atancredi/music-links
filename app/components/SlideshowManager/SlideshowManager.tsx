'use client';

import { useCallback, useEffect, useState, ReactNode } from "react";
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

import './SlideshowManager.css';

export interface ISlideshowManagerProps {
    children?: ReactNode
    loading: boolean
}

export default function SlideshowManager(props: Readonly<ISlideshowManagerProps>) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const swipableScreen = useSwipeable({
        onSwiped: (eventData) => {

            if (!props.loading){
                let children = document.getElementById("slides").childNodes.length;
                if (eventData.dir == "Up" && currentSlide < children - 1){
                    setCurrentSlide(currentSlide + 1)
                }
                else if (eventData.dir == "Down" && currentSlide > 0){
                    setCurrentSlide(currentSlide - 1)
                }
            }
                
        }
    });

    const movePageUp = useCallback(() => {
        if (currentSlide > 0)
            setCurrentSlide(currentSlide - 1)
    }, [currentSlide])

    const movePageDown = useCallback(() => {
        let children = document.getElementById("slides").childNodes.length;
        if (currentSlide < children - 1)
            setCurrentSlide(currentSlide + 1)
    }, [currentSlide])

    useEffect(() => {
        let slidesContainer = document.getElementById("slides");
        window.scrollTo({
            top: currentSlide * slidesContainer.offsetHeight,
            behavior: "smooth"
        })
    }, [currentSlide])


    // Loader

    return (
        <div id="page" className="w-screen h-screen touch-pan-x">
            <div id="slides" className="w-screen h-screen" {...swipableScreen}>
                {props.loading ?
                    (<div className="loader w-screen h-screen flex absolute top-0 z-50 bg-black">
                        <Image src={"/img-slides/logogifwhite.gif"} className="w-[200px] h-fit m-auto" priority alt={"Obvious Choice"} width={0} height={0} unoptimized></Image>
                    </div>) :
                    (<></>)}
                {props.children}
            </div>


            {/* <div id="slides-controls">
                <button onClick={movePageUp}>Up</button>
                <button onClick={movePageDown}>Down</button>
                <div>page: {currentSlide}</div>
            </div> */}
        </div>
    )

}