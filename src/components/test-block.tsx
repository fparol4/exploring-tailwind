import React from "react";

interface ParentProps {
    children?: React.ReactNode
}

export const TestBlock: React.FC<ParentProps> = ({ children }) => {
    return (
        <div className="max-w-xl min-h-[150px] flex flex-grow items-center">
            <div className='flex-grow'>{children}</div>
        </div>
    )
}