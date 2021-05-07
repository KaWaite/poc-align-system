import React from "react";
import styled from "styled-components";

export type Props = {
    className?: string;
    vertical?: boolean;
    middle?: boolean;
    end?: boolean;
    reverse?: boolean;
}

const GridArea: React.FC<Props> = ({
    className,
    vertical,
    middle,
    end,
    reverse,
    children
}) => (
    <Wrapper
        className={className}
        vertical={vertical}
        middle={middle}
        end={end}
        reverse={reverse}
    >
        {children}
    </Wrapper>
)

export default GridArea;

const Wrapper = styled.div<{ vertical?: boolean, middle?: boolean, end?: boolean, reverse?: boolean }>`
    // min-width:20px; // could add a editor mode prop that add min-width
    min-width: inherit;
    min-height:20px; // could add a editor mode prop that add min-height
    border: 1px solid red;
    display: flex;
    flex: 1;
    ${({ middle }) => middle && "flex-grow: 0;"}
    // flex-wrap: wrap;
    align-items: ${({ end, middle }) => end ? "flex-end" : middle ? "center" : "start"};
    justify-content: center;
    flex-direction: ${({ vertical, reverse }) => vertical ? reverse ? "column-reverse" : "column" : reverse ? "row-reverse" : "row"}
`;