import React from 'react';

import GridWrapper from "./components/Grid/GridWrapper";
import GridArea from "./components/Grid/GridArea";
import GridSection from "./components/Grid/GridSection";
import GridItem from "./components/Grid/GridItem";

import background from "./images/background.jpeg";
// import './App.css';
// import Counter from "align-system-poc";
import useHooks from "./hooks";

function App() {
    const { gridItems } = useHooks();
    const GridSystem = {
        background: "#d3bcbc",
        width: "100vw",
        height: "100vh",
        color: "white",
        // border: 1px solid black;
        backgroundImage: `url(${background})`
    }

    return (
        <div style={GridSystem}>
            <GridWrapper>
                {/* Left */}
                {gridItems?.expanded?.left.map(w => (
                    <GridSection key={w.id}>
                        <GridItem widget={w} expanded />
                    </GridSection>
                ))}
                <GridWrapper vertical>
                    {gridItems?.expanded?.top.map(w => (
                        <GridSection key={w.id}>
                            <GridItem widget={w} expanded />
                        </GridSection>
                    ))}
                    <GridWrapper>
                        <GridSection>
                            {gridItems?.left?.map(item => (
                                item.map((i, index) => (
                                    <GridArea key={i.position} vertical reverse={i.position === "bottom"} end={i.position === "bottom"}>
                                        {i.widgets.map(w => (
                                            <GridItem key={w.id + Math.random()} widget={w} />
                                        ))}
                                    </GridArea>
                                ))

                            ))}
                        </GridSection>

                        {/* Middle */}
                        <GridSection middle>
                            {gridItems?.middle?.map(item => (
                                item.map(i => (
                                    <GridArea key={i.position} end={i.position === "bottom"}>
                                        {i.widgets.map(w => (
                                            <GridItem key={w.id} widget={w} />
                                        ))}
                                    </GridArea>
                                ))

                            ))}
                        </GridSection>

                        {/* Right */}
                        <GridSection>
                            {gridItems?.right?.map(item => (
                                item.map(i => (
                                    <GridArea key={i.position} vertical reverse={i.position === "bottom"} end={i.position === "bottom"}>
                                        {i.widgets.map(w => (
                                            <GridItem key={w.id} widget={w} />
                                        ))}
                                    </GridArea>
                                ))

                            ))}
                        </GridSection>
                    </GridWrapper>
                    {gridItems?.expanded?.bottom.map(w => (
                        <GridSection key={w.id}>
                            <GridItem widget={w} expanded />
                        </GridSection>
                    ))}

                </GridWrapper>
                {gridItems?.expanded?.right.map(w => (
                    <GridSection key={w.id}>
                        <GridItem widget={w} expanded />
                    </GridSection>
                ))}
            </GridWrapper>
            {/* <Counter /> */}
        </div>
    );
}

export default App;
