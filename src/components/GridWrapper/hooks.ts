import mockdata from "../../mockdata.json";

export type Plugin = {
    id: string;
    name?: string;
    minHeight?: number;
    maxHeight?: number;
    minWidth?: number;
    maxWidth?: number;
    expanded?: boolean;
};

export type PluginData = Plugin[];

export type LayoutData = {
    left?: {
        top?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        center?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        bottom?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        }
    },
    middle?: {
        top?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        bottom?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        }
    },
    right?: {
        top?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        center?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        },
        bottom?: {
            widgets?: string[];
            align?: string; // "start" | "end" | "centered" | "expanded";
        }
    },

};

export default () => {

    const filterGridItems = (plugins: PluginData, layout: LayoutData) => {
        if (!plugins || !layout) return {};

        const leftTop = layout.left?.top?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const leftCenter = layout.left?.center?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const leftBottom = layout.left?.bottom?.widgets?.map(
            w => plugins.find(p => w === p.id));

        const middleTop = layout.middle?.top?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const middleBottom = layout.middle?.bottom?.widgets?.map(
            w => plugins.find(p => w === p.id));

        const rightTop = layout.right?.top?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const rightCenter = layout.right?.center?.widgets?.map(
            w => plugins.find(p => w === p.id));
        const rightBottom = layout.right?.bottom?.widgets?.map(
            w => plugins.find(p => w === p.id));

        return {
            leftTop,
            leftCenter,
            leftBottom,
            middleTop,
            middleBottom,
            rightTop,
            rightCenter,
            rightBottom,
        }

    };

    const gridItems = filterGridItems(mockdata.plugins, mockdata.layout);

    return { gridItems }
}