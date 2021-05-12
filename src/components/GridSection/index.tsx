import React from "react";
import styled from "styled-components";

export type Props = {
    middle?: boolean;
    bottom?: boolean;
    expanded?: boolean;
}

const GridSection: React.FC<Props> = ({
    middle,
    bottom,
    children,
    expanded
}) => (
    <Wrapper middle={middle} bottom={bottom} expanded={expanded}>
        {children}
    </Wrapper>
)

export default GridSection

// width: ${({ expanded, children }) => !children ? "0" : expanded ? "6em" : "20em"};
const Wrapper = styled.div<{ middle?: boolean, bottom?: boolean, expanded?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 105px;
  ${({ middle }) => !middle && "flex-grow: 0;"}
  ${({ middle }) => middle && "flex: auto;"}
//   padding:10px;
  border: 1px solid white;
  `;