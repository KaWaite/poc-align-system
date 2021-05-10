import React from "react";
import styled from "styled-components";
import GridArea from "../GridArea";
import GridSection from "../GridSection";
// import GridAreaItem from "../GridAreaItem";
import GridItem from "../GridItem";
import useHooks from "./hooks";

import background from "../../images/background.jpeg";

export type Props = {}

const GridWrapper: React.FC<Props> = () => {
    const { gridItems } = useHooks();

    return (
        <GlobalWrapper bg={background}>
            {/* Left */}
            <GridSection>
                <GridArea>
                    {gridItems?.leftTop?.map(p => (
                        <GridItem
                            key={p?.id}
                            plugin={p}
                        />
                    )
                    )}
                </GridArea>
                <GridArea middle>
                    {gridItems?.leftCenter?.map(p => (
                        <GridItem
                            key={p?.id}
                            plugin={p}
                        />
                    )
                    )}
                </GridArea>
                <GridArea reverse end>
                    {gridItems?.leftBottom?.map(p => (
                        <GridItem
                            key={p?.id}
                            plugin={p}
                        />
                    )
                    )}
                </GridArea>
            </GridSection>

            {/* Middle */}
            <GridSection middle>
                <GridArea middle>
                    {gridItems?.middleTop?.map(p => (
                        <GridItem
                            key={p?.id}
                            plugin={p}
                        />
                    )
                    )}
                </GridArea>
                <GridArea middle reverse>
                    {gridItems?.middleBottom?.map(p => (
                        <GridItem
                            key={p?.id}
                            plugin={p}
                        />
                    )
                    )}
                </GridArea>
            </GridSection>

            {/* Right */}
            <GridSection bottom>
                <GridArea>
                    {gridItems?.rightTop?.map(p => (
                        <GridItem
                            key={p?.id}
                            plugin={p}
                        />
                    )
                    )}
                </GridArea>
                <GridArea middle>
                    {gridItems?.rightCenter?.map(p => (
                        <GridItem
                            key={p?.id}
                            plugin={p}
                        />
                    )
                    )}
                </GridArea>
                <GridArea reverse end>
                    {gridItems?.rightBottom?.map(p => (
                        <GridItem
                            key={p?.id}
                            plugin={p}
                        />
                    )
                    )}
                </GridArea>
            </GridSection>
        </GlobalWrapper>
    )
}

export default GridWrapper;

const GlobalWrapper = styled.div<{ bg?: string }>`
    background: #171618;
    background-image: ${({ bg }) => `url(${bg})`};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;