import React from "react";
import styled from "styled-components";
// import GridAreaItem from "../GridAreaItem";

import background from "../../../images/background.jpeg";

export type Props = {
    vertical?: boolean;
}

const GridWrapper: React.FC<Props> = ({ vertical, children }) => (
    <Wrapper bg={background} vertical={vertical}>
        {children}
    </Wrapper>
)

export default GridWrapper;

const Wrapper = styled.div<{ bg?: string, vertical?: boolean }>`
    background-image: ${({ bg }) => `url(${bg})`};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: ${({ vertical }) => vertical ? "column" : "row"};
    justify-content: space-between;
    `;