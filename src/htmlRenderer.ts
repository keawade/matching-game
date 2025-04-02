import type { Board, Coordinate, Gem, Renderer } from "./types";

export class HtmlRenderer implements Renderer {
  public constructor(public root: Element) {}

  public init(boardState: Board): void {
    this.root.innerHTML = `<div class='board'>howdy</div>`;
  }

  public selectGem(coordinates: Coordinate): void {
    throw new Error("Method not implemented.");
  }

  public swap(a: Coordinate, b: Coordinate): void {
    throw new Error("Method not implemented.");
  }
}
