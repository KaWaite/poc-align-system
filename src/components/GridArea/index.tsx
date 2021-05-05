import React from "react";
import styled from "styled-components";

export type Props = {
    className?: string;
    vertical?: boolean;
    horizontal?: boolean;
    right?: boolean;
    bottom?: boolean;
    hasInner?: boolean;
}

const GridArea: React.FC<Props> = ({
    className,
    vertical,
    horizontal,
    right,
    bottom,
    hasInner,
    children
}) => (
    <Wrapper
        className={className}
        vertical={vertical}
        horizontal={horizontal}
        right={right}
        bottom={bottom}
    >
        {children}
    </Wrapper>
)

export default GridArea;

const Wrapper = styled.div<{ vertical?: boolean, horizontal?: boolean, right?: boolean; bottom?: boolean }>`
    min-width:20px; // could add a editor mode prop that add min-width
    // min-width: inherit;
    min-height:20px; // could add a editor mode prop that add min-height
    // margin: 10px;
    ${({ right, horizontal }) => right && horizontal ? "margin-left: auto;" : "margin-right: auto;"}
    border: 1px solid red;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: ${({ right, bottom }) => right || bottom ? "flex-end" : "start"};
    justify-content: center;
    flex-direction: ${({ vertical }) => vertical ? "column" : "row"}
`;