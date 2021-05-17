import React from "react";
import styled from "styled-components";
import { Widget } from "../../../hooks";

export type Props = {
    className?: string;
    widget?: Widget;
    expanded?: boolean;
}

const GridItem: React.FC<Props> = ({ className, children, widget, expanded }) =>
    <ItemComponent
        className={className}
        dimensions={widget}
        expanded={expanded}
    >
        <p>{widget?.name}</p>
        {children}
    </ItemComponent>



export default GridItem;

const ItemComponent = styled.div<{ dimensions?: Widget, expanded?: boolean }>`
    width: 100%;
    height: ${({ expanded }) => expanded ? "100%" : "75px"};
    // margin-bottom: 10px;
    border: 1px solid green;
    background: #3B3CD0;
    color: white;
`;
