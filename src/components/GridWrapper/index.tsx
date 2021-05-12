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
    console.log(gridItems)
    return (
        <GlobalWrapper bg={background}>
            {/* Left */}
            <GridSection>
                {gridItems?.left?.map(item => (
                    item.map(i => (
                        <GridArea key={i.position} left position={i.position}>
                            {i.widgets.map(w => (
                                <GridItem key={w.id} widget={w} />
                            ))}
                        </GridArea>
                    ))

                ))}
            </GridSection>

            {/* Middle */}
            <GridSection middle>
                {gridItems?.middle?.map(item => (
                    item.map(i => (
                        <GridArea key={i.position} left position={i.position}>
                            {i.widgets.map(w => (
                                <GridItem key={w.id} widget={w} />
                            ))}
                        </GridArea>
                    ))

                ))}
            </GridSection>

            {/* Right */}
            <GridSection bottom>
                {gridItems?.right?.map(item => (
                    item.map(i => (
                        <GridArea key={i.position} left position={i.position}>
                            {i.widgets.map(w => (
                                <GridItem key={w.id} widget={w} />
                            ))}
                        </GridArea>
                    ))

                ))}
                {/* <GridArea>
                    {gridItems?.rightTop?.map(p => (
                        <GridItem
                            key={p?.id}
                            widget={p}
                        />
                    )
                    )}
                </GridArea>
                <GridArea middle>
                    {gridItems?.rightCenter?.map(p => (
                        <GridItem
                            key={p?.id}
                            widget={p}
                        />
                    )
                    )}
                </GridArea>
                <GridArea reverse end>
                    {gridItems?.rightBottom?.map(p => (
                        <GridItem
                            key={p?.id}
                            widget={p}
                        />
                    )
                    )}
                </GridArea> */}
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