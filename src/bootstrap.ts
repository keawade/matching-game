import { Game } from "./engine.ts";
import { CanvasRenderer } from "./canvasRenderer.ts";
import { HtmlRenderer } from "./htmlRenderer.ts";

const root = document.querySelector("#root");

if (root === null) {
  console.error("failed to find root element");
  throw "failed to find root element";
}

// const r1 = new CanvasRenderer(root);
const r2 = new HtmlRenderer(root);
const game = new Game(r2);
