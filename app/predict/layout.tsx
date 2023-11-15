import React from 'react'
import { title } from "@/components/primitives";

const Layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <p className={title()}>Predict your job salary</p>
            {children}
        </div>
    )
}

export default Layout