import type { Board, Coordinate, Gem, Renderer } from "./types.ts";

export class CanvasRenderer implements Renderer {
  public constructor(root: Element) {
    root.innerHTML = `<canvas id="game" width="800" height="800">Matching game board.</canvas>`;

    const canvas = root.querySelector("canvas");

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

  public init(boardState: Board) {
    let x = 0;
    for (const column of boardState) {
      let y = 0;
      for (const gem of column) {
        this.drawGem(gem, { x, y });
        y++;
      }
      x++;
    }
  }

  public drawGem(gem: Gem, coordinates: { x: number; y: number }): void {
    const offsetX = coordinates.x * 100;
    const offsetY = coordinates.y * 100;
    this.ctx.strokeStyle = "black";
    this.ctx.stroke();
    this.ctx.fillStyle = gem.color;

    switch (gem.color) {
      case "red":
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 15, offsetY + 15);
        this.ctx.lineTo(offsetX + 85, offsetY + 15);
        this.ctx.lineTo(offsetX + 85, offsetY + 85);
        this.ctx.lineTo(offsetX + 15, offsetY + 85);
        this.ctx.lineTo(offsetX + 15, offsetY + 15);
        this.ctx.closePath();
        this.ctx.fill();
        return;

      case "orange":
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 50, offsetY + 10);
        this.ctx.lineTo(offsetX + 84, offsetY + 30);
        this.ctx.lineTo(offsetX + 84, offsetY + 70);
        this.ctx.lineTo(offsetX + 50, offsetY + 90);
        this.ctx.lineTo(offsetX + 16, offsetY + 70);
        this.ctx.lineTo(offsetX + 16, offsetY + 30);
        this.ctx.lineTo(offsetX + 50, offsetY + 10);
        this.ctx.closePath();
        this.ctx.fill();
        return;

      case "yellow":
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 50, offsetY + 10);
        this.ctx.lineTo(offsetX + 90, offsetY + 50);
        this.ctx.lineTo(offsetX + 50, offsetY + 90);
        this.ctx.lineTo(offsetX + 10, offsetY + 50);
        this.ctx.lineTo(offsetX + 50, offsetY + 10);
        this.ctx.closePath();
        this.ctx.fill();
        return;

      case "green":
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
        this.ctx.closePath();
        this.ctx.fill();
        return;

      case "blue":
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 10 + 20, offsetY + 10);
        this.ctx.lineTo(offsetX + 10 + 60, offsetY + 10);
        this.ctx.lineTo(offsetX + 10 + 80, offsetY + 10 + 20);
        this.ctx.lineTo(offsetX + 10 + 40, offsetY + 10 + 80);
        this.ctx.lineTo(offsetX + 10, offsetY + 10 + 20);
        this.ctx.lineTo(offsetX + 10 + 20, offsetY + 10);
        this.ctx.closePath();
        this.ctx.fill();
        return;

      case "purple":
        this.ctx.beginPath();
        this.ctx.moveTo(offsetX + 50, offsetY + 10);
        this.ctx.lineTo(offsetX + 10 + 80, offsetY + 10 + 80);
        this.ctx.lineTo(offsetX + 10, offsetY + 10 + 80);
        this.ctx.lineTo(offsetX + 50, offsetY + 10);
        this.ctx.closePath();
        this.ctx.fill();
        return;

      case "white":
        this.ctx.beginPath();
        this.ctx.arc(offsetX + 50, offsetY + 50, 40, 0, 2 * Math.PI);
        this.ctx.fill();
        return;
    }
  }

  public selectGem(coordinates: Coordinate): void {
    throw new Error("Method not implemented.");
  }

  public swap(a: Coordinate, b: Coordinate): void {
    throw new Error("Method not implemented.");
  }
}
