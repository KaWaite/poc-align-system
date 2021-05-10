import React from "react";
import styled from "styled-components";

export type Props = {
    middle?: boolean;
    bottom?: boolean;
    vertical?: boolean;
    end?: boolean;
}

const GridAreaItem: React.FC<Props> =
    ({ middle, bottom, vertical, end, children }) => (
        <Wrapper middle={middle} bottom={bottom} vertical={vertical} end={end}>
            {children}
        </Wrapper>
    )

export default GridAreaItem;

const Wrapper = styled.div<{ middle?: boolean, bottom?: boolean, vertical?: boolean, end?: boolean }>`
    display: flex;
    align-items: ${({ middle, bottom }) => middle ? "middle" : bottom ? "flex-end" : "start"};
    justify-content: ${({ middle, end }) => middle ? "center" : end ? "flex-end" : "flex-start"};
    width: 100%;
    flex-direction: ${({ vertical }) => vertical ? "column" : "row"};
    border: 1px solid orange;
`;