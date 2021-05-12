import React from "react";
import styled from "styled-components";

export type Props = {
    className?: string;
    horizontal?: boolean;
    middle?: boolean;
    end?: boolean;
    reverse?: boolean;
    left?: boolean;
    position?: string;
}

const GridArea: React.FC<Props> = ({
    className,
    horizontal,
    middle,
    end,
    reverse,
    children,
    left,
    position
}) => (
    <Wrapper
        className={className}
        horizontal={horizontal}
        middle={middle}
        end={end}
        reverse={reverse}
        left={left}
        position={position}
    >
        {children}
    </Wrapper>
)

export default GridArea;

const Wrapper = styled.div<{ horizontal?: boolean, middle?: boolean, end?: boolean, reverse?: boolean, left?: boolean, position?: string }>`
    width: 100%;
    min-height: inherit;
    // min-height:20px; // could add a editor mode prop that add min-height
    border: 1px solid red;
    display: flex;
    flex: 1;
    ${({ position, left }) => position === "center" && "flex-grow: 0;"}
    // flex-wrap: wrap;
    justify-content: ${({ position }) => position === "bottom" ? "end" : position === "center" ? "center" : "start"};
    flex-direction: ${({ horizontal, position }) =>
        horizontal ? position === "bottom" ? "row-reverse" : "row" : position === "bottom" ? "column-reverse" : "column"}
`;