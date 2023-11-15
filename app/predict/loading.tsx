import React from 'react'
import { Card, Skeleton } from "@nextui-org/react";

const Loading = () => {

    return (
        <div className='space-y-5 py-10'>
            <Skeleton className="rounded-lg">
                <div className="h-20 rounded-lg bg-default-300"></div>
            </Skeleton>

            {Array.from({ length: 3 }, (_, i) => i + 1).map(() => (
                <Skeleton className="w-full h-10 rounded-md" />
            ))}
        </div>
    )
}

export default Loading