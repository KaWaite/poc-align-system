import React from "react";
import "../../../App.css";

export type Props = {
    vertical?: boolean;
}

const GridWrapper: React.FC<Props> = ({ vertical, children }) => (
    <div className={`wrapper ${vertical && "vertical"}`}>
        {children}
    </div>
)

export default GridWrapper;