import React from "react";
import styled from "styled-components";

export type Props = {
    middle?: boolean;
    bottom?: boolean;
}

const GridSection: React.FC<Props> = ({ middle, bottom, children }) => (
    <Wrapper middle={middle} bottom={bottom}>
        {children}
    </Wrapper>
)

export default GridSection

const Wrapper = styled.div<{ middle?: boolean, bottom?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30em;
  ${({ middle }) => !middle && "flex-grow: 0;"}
  ${({ middle }) => middle && "flex: auto;"}
  padding:10px;
//   border: 1px solid white;
  `;