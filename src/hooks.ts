import mockdata from "./mockdata.json";

export type Widget = {
    id: string;
    name?: string;
    minHeight?: number;
    maxHeight?: number;
    minWidth?: number;
    maxWidth?: number;
    expanded?: boolean;
};

export type WidgetData = Widget[];

export type LayoutArea = {
    position?: string;
    widgets?: string[];
    align?: string; // "start" | "end" | "centered" | "expanded";
}

export type LayoutData = {
    left?: LayoutArea[],
    middle?: LayoutArea[],
    right?: LayoutArea[],

};

export default () => {

    const filterGridItems = (widgets: WidgetData, layout: LayoutData) => {
        if (!widgets || !layout) return {};

        const expanded: { [area: string]: Widget[] }
            = { left: [], top: [], bottom: [], right: [] };

        const handleWidgetInsertion =
            (gridAreas?: LayoutArea[], area?: string) => {
                if (!gridAreas) return undefined;

                return gridAreas.map(a => {
                    // const expanded: Widget[] = [];
                    const filteredWidgets = widgets.filter(
                        w => a.widgets?.find(w2 => {
                            if (w.id === w2) {
                                if (w.expanded && a.position) {
                                    area && area !== "middle" ? expanded[area].push(w) : expanded[a.position].push(w)
                                    return false;
                                };
                                return true;
                            }
                            return false;
                        })
                    );
                    return [
                        {
                            position: a.position,
                            align: a.align,
                            widgets: filteredWidgets,
                        }
                    ]
                });
            };
        const left = handleWidgetInsertion(layout?.left, "left");
        const middle = handleWidgetInsertion(layout?.middle, "middle");
        const right = handleWidgetInsertion(layout?.right, "right");

        return {
            left,
            middle,
            right,
            expanded
        }

    };

    const gridItems = filterGridItems(mockdata.plugins, mockdata.layout);

    return { gridItems }
}