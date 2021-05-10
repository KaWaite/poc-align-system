import React from "react";
import styled from "styled-components";

export type Props = {
    className?: string;
    horizontal?: boolean;
    middle?: boolean;
    end?: boolean;
    reverse?: boolean;
}

const GridArea: React.FC<Props> = ({
    className,
    horizontal,
    middle,
    end,
    reverse,
    children
}) => (
    <Wrapper
        className={className}
        horizontal={horizontal}
        middle={middle}
        end={end}
        reverse={reverse}
    >
        {children}
    </Wrapper>
)

export default GridArea;

const Wrapper = styled.div<{ horizontal?: boolean, middle?: boolean, end?: boolean, reverse?: boolean }>`
    width: 100%;
    min-height: inherit;
    // min-height:20px; // could add a editor mode prop that add min-height
    border: 1px solid red;
    display: flex;
    flex: 1;
    ${({ middle }) => middle && "flex-grow: 0;"}
    // flex-wrap: wrap;
    justify-content: ${({ end, middle }) => end ? "end" : middle ? "center" : "start"};
    flex-direction: ${({ horizontal, reverse }) => horizontal ? reverse ? "row-reverse" : "row" : reverse ? "column-reverse" : "column"}
`;