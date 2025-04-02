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

export type Board = Gem[][];
export type Coordinate = { x: number; y: number };

export interface Renderer {
  init(boardState: Board): void;
  selectGem(coordinates: Coordinate): void;
  swap(a: Coordinate, b: Coordinate): void;
}
