import { GemColor, type Gem } from "./engine.ts";

export class Renderer {
  public constructor(canvas: HTMLCanvasElement | null) {
    if (canvas === null) {
      console.error("failed to find canvas element");
      throw "failed to find canvas element";
    }
    this.canvas = canvas;

    const context = this.canvas.getContext("2d");
    if (context === null) {
      console.error("failed to get 2d render context from canvas");
      throw "failed to get 2d render context from canvas";
    }
    this.ctx = context;
  }

  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  public drawGem(gem: Gem, coordinates: { x: number; y: number }): void {
    const offsetX = coordinates.x * 100;
    const offsetY = coordinates.y * 100;
    this.ctx.strokeStyle = "black";
    this.ctx.stroke();

    switch (gem.color) {
      case GemColor.Red:
        this.ctx.fillStyle = "red";
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 15, offsetY + 15);
        this.ctx.lineTo(offsetX + 85, offsetY + 15);
        this.ctx.lineTo(offsetX + 85, offsetY + 85);
        this.ctx.lineTo(offsetX + 15, offsetY + 85);
        this.ctx.lineTo(offsetX + 15, offsetY + 15);
        this.ctx.fill();

        break;
      case GemColor.Orange:
        this.ctx.fillStyle = "orange";
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 50, offsetY + 10);
        this.ctx.lineTo(offsetX + 84, offsetY + 30);
        this.ctx.lineTo(offsetX + 84, offsetY + 70);
        this.ctx.lineTo(offsetX + 50, offsetY + 90);
        this.ctx.lineTo(offsetX + 16, offsetY + 70);
        this.ctx.lineTo(offsetX + 16, offsetY + 30);
        this.ctx.lineTo(offsetX + 50, offsetY + 10);
        this.ctx.fill();
        break;
      case GemColor.Yellow:
        this.ctx.fillStyle = "yellow";
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 50, offsetY + 10);
        this.ctx.lineTo(offsetX + 90, offsetY + 50);
        this.ctx.lineTo(offsetX + 50, offsetY + 90);
        this.ctx.lineTo(offsetX + 10, offsetY + 50);
        this.ctx.lineTo(offsetX + 50, offsetY + 10);
        this.ctx.fill();
        break;
      case GemColor.Green:
        this.ctx.fillStyle = "green";
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 50 - 15, offsetY + 10);
        this.ctx.lineTo(offsetX + 50 + 15, offsetY + 10);
        this.ctx.lineTo(offsetX + 90, offsetY + 50 - 15);
        this.ctx.lineTo(offsetX + 90, offsetY + 50 + 15);
        this.ctx.lineTo(offsetX + 50 + 15, offsetY + 90);
        this.ctx.lineTo(offsetX + 50 - 15, offsetY + 90);
        this.ctx.lineTo(offsetX + 10, offsetY + 50 + 15);
        this.ctx.lineTo(offsetX + 10, offsetY + 50 - 15);
        this.ctx.lineTo(offsetX + 50 - 15, offsetY + 10);
        this.ctx.fill();
        break;
      case GemColor.Blue:
        this.ctx.fillStyle = "blue";
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 10 + 20, offsetY + 10);
        this.ctx.lineTo(offsetX + 10 + 60, offsetY + 10);
        this.ctx.lineTo(offsetX + 10 + 80, offsetY + 10 + 20);
        this.ctx.lineTo(offsetX + 10 + 40, offsetY + 10 + 80);
        this.ctx.lineTo(offsetX + 10, offsetY + 10 + 20);
        this.ctx.lineTo(offsetX + 10 + 20, offsetY + 10);
        this.ctx.fill();
        break;
      case GemColor.Purple:
        this.ctx.fillStyle = "purple";
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 50, offsetY + 10);
        this.ctx.lineTo(offsetX + 10 + 80, offsetY + 10 + 80);
        this.ctx.lineTo(offsetX + 10, offsetY + 10 + 80);
        this.ctx.lineTo(offsetX + 50, offsetY + 10);
        this.ctx.fill();
        break;
      case GemColor.White:
        this.ctx.fillStyle = "white";
        this.ctx.beginPath();
        this.ctx.arc(offsetX + 50, offsetY + 50, 40, 0, 2 * Math.PI);
        this.ctx.fill();
        break;
    }
  }
}
