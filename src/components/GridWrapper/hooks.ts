import mockdata from "../../mockdata.json";

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

        const handleWidgetInsertion = (gridAreas?: LayoutArea[]) => {
            if (!gridAreas) return undefined;

            return gridAreas.map(a => {
                const expanded: Widget[] = [];
                const filteredWidgets = widgets.filter(
                    w => a.widgets?.find(w2 => {
                        if (w.id === w2) {
                            if (w.expanded) {
                                expanded.push(w)
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
                        expanded,
                    }
                ]
            });
        };

        const left = handleWidgetInsertion(layout?.left);
        const middle = handleWidgetInsertion(layout?.middle);
        const right = handleWidgetInsertion(layout?.right);

        return {
            left,
            middle,
            right,
        }

    };

    const gridItems = filterGridItems(mockdata.plugins, mockdata.layout);

    return { gridItems }
}