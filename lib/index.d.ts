import { World, Body, Shape } from "planck-js";

declare module "planck-renderer" {
    export const Renderer: CanvasRenderer | SVGRenderer;

    export interface TextContent {
        text: string;
        x: number;
        y: number;
    }

    export interface CanvasContent {
        world: World;
        textContentArray: TextContent[];
    }

    export class CanvasRenderer {
        private world: World;
        private textContent: TextContent[];
        private ctx: CanvasRenderingContext2D;
        private canvas: HTMLCanvasElement;
        private options: object;

        constructor(canvasContent: CanvasContent, ctx: CanvasRenderingContext2D, options: object);
        private clear(HTMLCanvasElement, CanvasRenderingContext2D): void;
        private drawCircle(body: Body, shape: Shape): void;
        private drawEdge(shape: Shape): void;
        private drawPolygon(body: Body, shape: Shape): void;
        private drawJoint(body: Body, shape: Shape): void;
        renderContent(): void;
    }

    export class SVGRenderer {

    }

    export class Runner {
        private world: World;
        private options: object;
        private runId: number;

        constructor(world: World, options: object);
        private render(): void;
        private update(): void;
        start(render?: () => void, update?: () => void): void;
        stop(): void;
    }
}
