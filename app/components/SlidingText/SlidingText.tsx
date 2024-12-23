import './SlidingText.css';
import { PropsWithChildren } from 'react';

export interface ISlidingTextProps {
    className?: string
}

export default function SlidingText({children, className = ""}: PropsWithChildren<ISlidingTextProps>) {
    return (
        <div className='relative'> 
            <div className='bg-black w-full h-[2em]'></div>
            <div className={'sliding-text text-white w-full h-[2rem] inline-block truncate absolute top-0 z-[1] flex' + className}>
                <div className='flex flex-nowrap mt-auto mb-auto'>
                    <h1>{children}</h1>
                    <h1>{children}</h1>
                    <h1>{children}</h1>
                    <h1>{children}</h1>
                    <h1>{children}</h1>
                    <h1>{children}</h1>
                    <h1>{children}</h1>
                    <h1>{children}</h1>
                    <h1>{children}</h1>
                </div>
            </div>
        </div>
        
    )
}
