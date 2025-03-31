import { Renderer } from "./render.ts";

const gemColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "white",
] as const;
export type GemColor = (typeof gemColors)[number];

export const randomGemColor = (): GemColor =>
  gemColors[Math.floor(Math.random() * gemColors.length)];

const gemTypes = ["plain", "explodey", "cross", "hyper"] as const;
export type GemType = (typeof gemTypes)[number];

export class Gem {
  constructor(color?: GemColor, type?: GemType) {
    this.color = color ?? randomGemColor();
    this.type = type ?? "plain";
  }

  color: GemColor;
  type: GemType;
}

export class Game {
  public constructor(public renderer: Renderer) {
    this.boardState = new Array(this.board.size.columns)
      .fill("")
      .map(() => new Array(this.board.size.rows).fill("").map(() => new Gem()));
  }

  board = {
    size: {
      rows: 8,
      columns: 8,
    },
    padding: 10,
  };

  boardState: Gem[][];

  render() {
    let x = 0;
    for (const column of this.boardState) {
      let y = 0;
      for (const gem of column) {
        this.renderer.drawGem(gem, { x, y });
        y++;
      }
      x++;
    }
  }
}
