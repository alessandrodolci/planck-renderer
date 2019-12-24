import { World, Body, Shape } from "planck-js";

declare module "planck-renderer" {
    export const Renderer: CanvasRenderer | SVGRenderer;

    export class CanvasRenderer {
        private world: World;
        private ctx: CanvasRenderingContext2D;
        private canvas: HTMLCanvasElement;
        private options: object;

        constructor(world: World, ctx: CanvasRenderingContext2D, options: object);
        private clear(HTMLCanvasElement, CanvasRenderingContext2D): void;
        private drawCircle(body: Body, shape: Shape): void;
        private drawEdge(shape: Shape): void;
        private drawPolygon(body: Body, shape: Shape): void;
        private drawJoint(body: Body, shape: Shape): void;
        renderWorld(): void;
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
        start(render: function = null, update: function = null): void;
        stop(): void;
    }
}
