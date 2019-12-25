class Runner {
    constructor(canvasContent, options = {}) {
        const defaultOptions = {
            fps: 60,
            speed: 1,
        };
        this.options = Object.assign(defaultOptions, options);
        this.canvasContent = canvasContent;
        this.runId = null;
        this.render = null;
        this.update = null;
    }

    start(render = null, update = null) {
        if (this.runId) {
            return;
        }
        if (render) {
            this.render = render;
        }
        if (update) {
            this.update = update;
        }
        const step = 1 / this.options.fps;
        const slomo = 1 / this.options.speed;
        const slowStep = slomo * step;
        let last = performance.now();
        let dt = 0;
        let now;
        let delta;

        const tick = () => {
            now = performance.now();
            dt = dt + Math.min(1, (now - last) / 1000);
            while (dt > slowStep) {
                this.canvasContent.world.step(step);
                if (typeof update === 'function') {
                    this.update(step);
                }
                dt -= slowStep;
            }
            delta = (now - last) / 1000;
            this.fps = 1 / delta;
            last = now;

            this.render();

            this.runId = requestAnimationFrame(tick);
        };

        this.runId = requestAnimationFrame(tick);
    }

    stop() {
        if (this.runId) {
            cancelAnimationFrame(this.runId);
            this.runId = null;
        }
    }
}

export { Runner };
