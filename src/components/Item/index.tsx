import React from "react";
import styled from "styled-components";

export type Props = {
    className?: string;
    minHeight?: number;
    maxHeight?: number;
    minWidth?: number;
    maxWidth?: number;
}

const Item: React.FC<Props> = ({ className, children, ...props }) =>
    <ItemComponent className={className} dimensions={props}>
        {children}
    </ItemComponent>



export default Item;

const ItemComponent = styled.div<{ dimensions: Props }>`
    min-width: ${({ dimensions }) => dimensions.minWidth}px;
    max-width: ${({ dimensions }) => dimensions.maxWidth}px;
    min-height: ${({ dimensions }) => dimensions.minHeight}px;
    max-max: ${({ dimensions }) => dimensions.maxHeight}px;
    // margin-bottom: 10px;
    border: 1px solid green;
    background: yellow;
    color: black;
`;