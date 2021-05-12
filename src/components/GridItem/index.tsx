import React from "react";
import styled from "styled-components";
import { Widget } from "../GridWrapper/hooks";

export type Props = {
    className?: string;
    widget?: Widget;
}

const GridItem: React.FC<Props> = ({ className, children, widget }) =>
    <ItemComponent className={className} dimensions={widget}>
        <p>{widget?.name}</p>
        {children}
    </ItemComponent>



export default GridItem;

const ItemComponent = styled.div<{ dimensions?: Widget }>`
    width: 100%;
    height: 75px;
    // margin-bottom: 10px;
    border: 1px solid green;
    background: #3B3CD0;
    color: white;
`;
