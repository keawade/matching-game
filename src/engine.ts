import { Gem, type Board, type Renderer } from "./types.ts";

export class Game {
  public constructor(public renderer: Renderer) {
    this.boardState = new Array(this.board.size.columns)
      .fill("")
      .map(() => new Array(this.board.size.rows).fill("").map(() => new Gem()));

    this.renderer.init(this.boardState);
  }

  public board = {
    size: {
      rows: 8,
      columns: 8,
    },
    padding: 10,
  };

  public boardState: Board;
}
