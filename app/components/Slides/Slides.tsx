'use client';

import Image from 'next/image';

import './Slides.css';
import Slide from "./Slide";
import TextRow from "./TextRow";
import SlideshowManager from '../SlideshowManager/SlideshowManager';
import { useEffect, useState } from 'react';

export default function Slides() {

    const [loading, setLoading] = useState(true);

    return (
        <SlideshowManager loading={loading}>
            <Slide setLoading={setLoading} bgUrl="/img-slides/bgloc.jpg" logoPosition={{ top: 61.5, right: 0 }} className="text-[#13105a] text-right font-bold" nologo>

                <div className="h-[0.5rem]"></div>
                <TextRow textSize={2} rowHeight={1.5}>
                    19 Dicembre 2024
                </TextRow>
                <TextRow textSize={1.5} rowHeight={1}>
                    Caracol, Pisa
                </TextRow>
                <div className="h-[1rem]"></div>

                <div className="flex justify-end mb-1">
                    <Image src={"/img-slides/logoBoxBlack.png"} className="w-3/4" priority alt={"Obvious Choice"} width={0} height={0} unoptimized></Image>
                </div>
                <div className="h-[1rem]"></div>

                <TextRow textSize={1.5} rowHeight={1}>
                    hosted by
                </TextRow>

                <TextRow textSize={2} rowHeight={1}>
                    Grande Fumo x Ill Veno x Dave Russo
                </TextRow>

                <div className="h-[1rem]"></div>
                <TextRow>
                    <div className="dot-filled">
                        21.00
                    </div>
                    <div className="overflow-hidden pl-1 min-w-fit">
                        dj set
                    </div>
                </TextRow>

                <TextRow>
                    <div className="dot-filled">
                        22.00
                    </div>
                    <div className="overflow-hidden pl-1 min-w-fit">
                        live rap
                    </div>
                </TextRow>

                <TextRow textSize={1.5} rowHeight={1}>
                    ROOT JUICE, SERNI
                </TextRow>

                <TextRow textSize={1.5} rowHeight={1}>
                    SNAF & PEPE NOCCIOLA
                </TextRow>

                <TextRow textSize={1.5} rowHeight={1}>
                    CREEP GIULIANO & KAZAWI
                </TextRow>

                <TextRow>
                    <div className="dot-filled">
                        01:00
                    </div>
                    <div className="overflow-hidden pl-1 min-w-fit">
                        closing party
                    </div>
                </TextRow>

                <TextRow proportion="2/5">
                    <Image src={"/img-slides/oyoya_.png"} className="w-full" priority alt={"OYOYA"} width={0} height={0} unoptimized></Image>
                </TextRow>
            </Slide>
            <Slide bgUrl="/img-slides/bg.jpg" hasHeader={true} headerPosition={"110vh"} logoPosition={{ top: 30, left: 0 }} className='text-white'><></></Slide>
            {/* <Slide bgUrl="/img-slides/bg2.jpg" hasHeader={true} headerPosition={"210vh"} logoPosition={{ top: 56.5, right: 0 }} className='text-white'><></></Slide> */}
        </SlideshowManager>
    )

}