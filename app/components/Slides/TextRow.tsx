'use client';

import { ReactNode } from 'react';

interface ITextRowProps {
    children?: ReactNode
    textSize?: string
    lineHeight?: string
    width?: string
    className?: string
}

export default function TextRow({
    textSize = "2em",
    lineHeight = "1.5em",
    width = "75vw",
    className,
    children
}: Readonly<ITextRowProps>) {
    return (
        <div className="flex flex-row justify-end text-right h-fit">
            <div className={'pl-2 pr-2 -tracking-[0.03em] flex flex-row justify-end '+className} style={{fontSize: textSize, lineHeight: lineHeight, width: width}}>
                {children}
            </div>
        </div>
    )
}