import type { Board, Coordinate, Renderer } from "./types";

export class HtmlRenderer implements Renderer {
  public constructor(public root: Element) {}

  public init(boardState: Board): void {
    const items = boardState
      .flat()
      .map(
        (gem) =>
          `<div class='box'><div class='gem gem-${gem.color} gem-${gem.type}'></div></div>`,
      )
      .join("");

    this.root.innerHTML = `<div class='board'>${items}</div>`;
  }

  public selectGem(coordinates: Coordinate): void {
    throw new Error("Method not implemented.");
  }

  public swap(a: Coordinate, b: Coordinate): void {
    throw new Error("Method not implemented.");
  }
}
