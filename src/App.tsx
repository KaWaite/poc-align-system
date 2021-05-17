import React from 'react';
import styled from "styled-components";

import GridWrapper from "./components/Grid/GridWrapper";
import GridArea from "./components/Grid/GridArea";
import GridSection from "./components/Grid/GridSection";
import GridItem from "./components/Grid/GridItem";

// import './App.css';
// import Counter from "align-system-poc";
import useHooks from "./hooks";

function App() {
    const { gridItems } = useHooks();

    return (
        <GridSystem className="App">
            <GridWrapper>
                {/* Left */}
                {gridItems?.expanded?.left.map(w => (
                    <GridSection key={w.id} expanded>
                        <GridItem widget={w} expanded />
                    </GridSection>
                ))}
                <GridWrapper vertical>
                    {gridItems?.expanded?.top.map(w => (
                        <GridSection key={w.id} expanded>
                            <GridItem widget={w} expanded />
                        </GridSection>
                    ))}
                    <GridWrapper>
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
                    </GridWrapper>
                    {gridItems?.expanded?.bottom.map(w => (
                        <GridSection key={w.id} expanded>
                            <GridItem widget={w} expanded />
                        </GridSection>
                    ))}

                </GridWrapper>
                {gridItems?.expanded?.right.map(w => (
                    <GridSection key={w.id} expanded>
                        <GridItem widget={w} expanded />
                    </GridSection>
                ))}
            </GridWrapper>
            {/* <Counter /> */}
        </GridSystem>
    );
}

export default App;

const GridSystem = styled.div`
  background: #d3bcbc;
  width: 100vw;
  height: 100vh;
  color: white;
  // border: 1px solid black;
`;
