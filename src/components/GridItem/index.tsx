import React from "react";
import styled from "styled-components";
import { Plugin } from "../GridWrapper/hooks";

export type Props = {
    className?: string;
    plugin?: Plugin;
}

const GridItem: React.FC<Props> = ({ className, children, plugin }) =>
    <ItemComponent className={className} dimensions={plugin}>
        <p>{plugin?.name}</p>
        {children}
    </ItemComponent>



export default GridItem;

const ItemComponent = styled.div<{ dimensions?: Plugin }>`
    width: 100%;
    height: 150px;
    // margin-bottom: 10px;
    border: 1px solid green;
    background: #3B3CD0;
    color: white;
`;
const OldItemComponent = styled.div<{ p: Plugin }>`
    min-width: ${({ p }) => p.minWidth}px;
    max-width: ${({ p }) => p.maxWidth}px;
    min-height: ${({ p }) => p.minHeight}px;
    max-max: ${({ p }) => p.maxHeight}px;
    // margin-bottom: 10px;
    border: 1px solid green;
    background: #3B3CD0;
    color: white;
`;