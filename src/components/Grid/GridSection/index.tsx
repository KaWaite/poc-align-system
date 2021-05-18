import React from "react";

export type Props = {
    middle?: boolean;
}

const GridSection: React.FC<Props> = ({
    middle,
    children,
}) => (
    <div className={`section ${middle && "middle"}`}>
        {children}
    </div>
)

export default GridSection;
