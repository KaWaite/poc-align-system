import mockdata from "../../mockdata.json";

export type Plugin = {
    id: string;
    name?: string;
    minHeight?: number;
    maxHeight?: number;
    minWidth?: number;
    maxWidth?: number;
};

export type PluginData = Plugin[];

export type LayoutData = {
    outer?: {
        topCenter?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        topLeft?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        topRight?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        middleLeft?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        middleRight?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        bottomCenter?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        bottomLeft?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        bottomRight?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        }
    },
    inner?: {
        topCenter?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        topLeft?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        topRight?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        middleLeft?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        middleRight?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        bottomCenter?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        bottomLeft?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        bottomRight?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        }
    }
};

export default () => {
    const filterGridItems = (plugins: PluginData, layout: LayoutData) => {
        if (!plugins || !layout) return {};

        const topLeft = layout.outer?.topLeft?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const topCenter = layout.outer?.topCenter?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const topRight = layout.outer?.topRight?.widgets?.map(
            w => plugins.find(p => w === p.id));

        const middleLeft = layout.outer?.middleLeft?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const middleRight = layout.outer?.middleRight?.widgets?.map(
            w => plugins.find(p => w === p.id));

        const bottomLeft = layout.outer?.bottomLeft?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const bottomCenter = layout.outer?.bottomCenter?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const bottomRight = layout.outer?.bottomRight?.widgets?.map(
            w => plugins.find(p => w === p.id));

        return {
            topLeft,
            topCenter,
            topRight,
            middleLeft,
            middleRight,
            bottomLeft,
            bottomCenter,
            bottomRight
        }
    };

    const gridItems = filterGridItems(mockdata.plugins, mockdata.layout);

    return {
        gridItems
    }
}