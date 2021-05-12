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
        <Wrapper bg={background}>
            {/* Left */}
            {gridItems?.expanded?.left.map(w => (
                <GridSection key={w.id} expanded>
                    <GridItem widget={w} expanded />
                </GridSection>
            ))}
            <SecondaryWrapper vertical>
                {gridItems?.expanded?.top.map(w => (
                    <GridSection key={w.id} expanded>
                        <GridItem widget={w} expanded />
                    </GridSection>
                ))}
                <SecondaryWrapper>
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
                    </GridSection>
                </SecondaryWrapper>
                {gridItems?.expanded?.bottom.map(w => (
                    <GridSection key={w.id} expanded>
                        <GridItem widget={w} expanded />
                    </GridSection>
                ))}

            </SecondaryWrapper>
            {gridItems?.expanded?.right.map(w => (
                <GridSection key={w.id} expanded>
                    <GridItem widget={w} expanded />
                </GridSection>
            ))}
        </Wrapper>
    )
}

export default GridWrapper;

const Wrapper = styled.div<{ bg?: string, vertical?: boolean }>`
    background: #171618;
    background-image: ${({ bg }) => `url(${bg})`};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;

const SecondaryWrapper = styled.div<{ bg?: string, vertical?: boolean, full?: boolean }>`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: ${({ vertical }) => vertical ? "column" : "row"};
    `;