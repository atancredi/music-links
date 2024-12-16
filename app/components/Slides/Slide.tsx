'use client';

import Image from 'next/image';

import './Slides.css';
import SlidingText from "../SlidingText/SlidingText";
import { ReactNode, useEffect, useRef, useState, Dispatch, SetStateAction } from 'react';
import SlideHeader from './SlideHeader';

interface IPosition {
    top?: number
    bottom?: number
    right?: number
    left?: number
}

export interface ISlideProps {
    children?: ReactNode
    hasHeader?: boolean
    headerPosition?: string | number
    bgUrl: string
    logoPosition: IPosition
    className?: string
    nologo?: boolean
    setLoading?: Dispatch<SetStateAction<boolean>>
}

export default function Slide({ children = {} as ReactNode, hasHeader = false, headerPosition = 0, bgUrl, logoPosition, className = "", nologo = false, setLoading }: Readonly<ISlideProps>) {

    const getSlideIndex = () => {
        if (!container.current) return null;
        let rect = container.current.getBoundingClientRect();
        return (rect.top / rect.height);
    }

    useEffect(() => {
        setSlideIndex(getSlideIndex());
    }, [])

    const container = useRef<HTMLDivElement>(null);
    const [slideIndex, setSlideIndex] = useState(getSlideIndex())
    useEffect(() => {
        console.log("slide nmber", slideIndex, { top: (logoPosition.top + 100 * slideIndex) + "vh" })
    }, [slideIndex])

    const onBgLoad = () => {
        if (setLoading)
            setLoading(false);
    }

    return (
        <div ref={container} className={"w-screen h-screen"}>
            {slideIndex != null && hasHeader && (<SlideHeader headerPosition={headerPosition}></SlideHeader>)}
            {slideIndex != null && (<>
                <div className={'w-full h-full ' + className}>
                    <Image onLoad={onBgLoad} className='w-full h-full absolute' src={bgUrl} alt={""} width={0} height={0} unoptimized></Image>
                    <div className="flex flex-col absolute top-0 w-full overflow-hidden">
                        {children}
                    </div>
                </div>
                {!nologo ? (<Image src={"/img-slides/logotransparentwhite.png"} className="w-3/4 absolute" priority
                    style={{ ...logoPosition, top: (logoPosition.top + 100 * slideIndex) + "vh" }} alt={"Obvious Choice"} width={0} height={0} unoptimized></Image>) : ""}
            </>)}
        </div>
    )

}