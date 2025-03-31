import { Renderer } from "./render.ts";

export enum GemColor {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Purple,
  White,
}

export const randomGemColor = (): GemColor => Math.floor(Math.random() * 7);

export enum GemType {
  Plain,
  Explodey,
  Cross,
  Hyper,
}

export class Gem {
  constructor(color?: GemColor, type?: GemType) {
    this.color = color ?? randomGemColor();
    this.type = type ?? GemType.Plain;
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
