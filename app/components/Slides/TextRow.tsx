'use client';

import Image from 'next/image';

import { ReactNode, useEffect, useRef, useState, Children, Fragment } from 'react';


interface ITextRowProps {
    children?: ReactNode
    textSize?: number
    rowHeight?: number
    proportion?: string
}

export default function TextRow(props: Readonly<ITextRowProps>) {

    return (
        <div className="flex flex-row justify-end text-right">
            <div className={'text-['+(props.textSize ? props.textSize : 2)+'em] leading-['+(props.rowHeight ? props.rowHeight : 1.5)+'em] pl-2 pr-2 -tracking-[0.03em] flex  flex-row justify-end w-'+(props.proportion ? props.proportion: '3/4')+' w-max-'+(props.proportion ? props.proportion: '3/4')+''}>
                {props.children}
            </div>
        </div>
    )

}