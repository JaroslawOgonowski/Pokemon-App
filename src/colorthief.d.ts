declare module "colorthief" {
  class ColorThief {
    constructor();
    getColor(
      sourceImage: HTMLImageElement | HTMLCanvasElement | string
    ): number[];
  }

  export default ColorThief;
}
