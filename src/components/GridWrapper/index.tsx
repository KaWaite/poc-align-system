import React from "react";
import styled from "styled-components";
import GridArea from "../GridArea";
import Item from "../Item";
import useHooks from "./hooks";

export type Props = {}

const GridWrapper: React.FC<Props> = () => {
    const { gridItems } = useHooks();

    return (
        <GlobalWrapper>

            {/* Top */}
            <GridSection>
                <GridArea vertical>
                    {gridItems?.topLeft?.map(p => (
                        <Item
                            key={p?.id}
                            minHeight={p?.minHeight}
                            maxHeight={p?.maxHeight}
                            minWidth={p?.minWidth}
                            maxWidth={p?.maxWidth}
                        />
                    )
                    )}
                </GridArea>
                <GridArea horizontal hasInner>
                    <GridAreaItem>
                        {gridItems?.topCenter?.map(p => (
                            <Item
                                key={p?.id}
                                minHeight={p?.minHeight}
                                maxHeight={p?.maxHeight}
                                minWidth={p?.minWidth}
                                maxWidth={p?.maxWidth}
                            />
                        )
                        )}
                    </GridAreaItem>
                    <GridAreaItem>
                        {gridItems?.topCenterInner?.map(p => (
                            <Item
                                key={p?.id}
                                minHeight={p?.minHeight}
                                maxHeight={p?.maxHeight}
                                minWidth={p?.minWidth}
                                maxWidth={p?.maxWidth}
                            />
                        )
                        )}
                    </GridAreaItem>
                </GridArea>
                <GridArea vertical right>
                    {gridItems?.topRight?.map(p => (
                        <Item
                            key={p?.id}
                            minHeight={p?.minHeight}
                            maxHeight={p?.maxHeight}
                            minWidth={p?.minWidth}
                            maxWidth={p?.maxWidth}
                        />
                    )
                    )}
                </GridArea>
            </GridSection>

            {/* Middle */}
            <GridSection middle>
                <GridArea>
                    <GridAreaItem vertical>
                        {gridItems?.middleLeft?.map(p => (
                            <Item
                                key={p?.id}
                                minHeight={p?.minHeight}
                                maxHeight={p?.maxHeight}
                                minWidth={p?.minWidth}
                                maxWidth={p?.maxWidth}
                            />
                        )
                        )}
                    </GridAreaItem>
                    <GridAreaItem vertical>
                        {gridItems?.middleLeft?.map(p => (
                            <Item
                                key={p?.id}
                                minHeight={p?.minHeight}
                                maxHeight={p?.maxHeight}
                                minWidth={p?.minWidth}
                                maxWidth={p?.maxWidth}
                            />
                        )
                        )}
                    </GridAreaItem>
                </GridArea>
                <GridArea vertical right>
                    {gridItems?.middleRight?.map(p => (
                        <Item
                            key={p?.id}
                            minHeight={p?.minHeight}
                            maxHeight={p?.maxHeight}
                            minWidth={p?.minWidth}
                            maxWidth={p?.maxWidth}
                        />
                    )
                    )}
                </GridArea>
            </GridSection>

            {/* Bottom */}
            <GridSection bottom>
                <GridArea vertical>
                    {gridItems?.bottomLeft?.map(p => (
                        <Item
                            key={p?.id}
                            minHeight={p?.minHeight}
                            maxHeight={p?.maxHeight}
                            minWidth={p?.minWidth}
                            maxWidth={p?.maxWidth}
                        />
                    )
                    )}
                </GridArea>
                <GridArea horizontal bottom>
                    {gridItems?.bottomCenter?.map(p => (
                        <Item
                            key={p?.id}
                            minHeight={p?.minHeight}
                            maxHeight={p?.maxHeight}
                            minWidth={p?.minWidth}
                            maxWidth={p?.maxWidth}
                        />
                    )
                    )}
                </GridArea>
                <GridArea vertical right>
                    {gridItems?.bottomRight?.map(p => (
                        <Item
                            key={p?.id}
                            minHeight={p?.minHeight}
                            maxHeight={p?.maxHeight}
                            minWidth={p?.minWidth}
                            maxWidth={p?.maxWidth}
                        />
                    )
                    )}
                </GridArea>
            </GridSection>
        </GlobalWrapper>
    )
}

export default GridWrapper;

const GlobalWrapper = styled.div`
    background: #171618;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const GridSection = styled.div<{ middle?: boolean, bottom?: boolean }>`
  display: flex;
  align-items: ${({ middle, bottom }) => middle ? "middle" : bottom ? "flex-end" : "start"};
  justify-content: space-between;
  flex: 1;
  ${({ middle }) => middle && "flex-grow: 0;"}
  padding:10px;
  border: 1px solid white;
  `;

const GridAreaItem = styled.div<{ middle?: boolean, bottom?: boolean, vertical?: boolean }>`
  display: flex;
  align-items: ${({ middle, bottom }) => middle ? "middle" : bottom ? "flex-end" : "start"};
  justify-content: space-between;
  flex-direction: ${({ vertical }) => vertical ? "column" : "row"};
  border: 1px solid orange;
  `;