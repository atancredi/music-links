'use client';


import SlidingText from "../SlidingText/SlidingText";

export interface ISlideHeaderProps {
    headerPosition: string | number
}

export default function SlideHeader({ headerPosition }: ISlideHeaderProps) {

    return (
        <div className="absolute bg-black text-white h-fit flex flex-col w-full z-10" style={{ top: headerPosition }}>
            <SlidingText className=""><div className="mr-1">obviouschoice</div></SlidingText>
            <div className="leading-8 flex flex-row justify-between w-full pl-1 pr-1">
                <div>/independent hip hop.</div>
                {/* <div className="underline">Listen</div> */}
            </div>
        </div>
    )

}