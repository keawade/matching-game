import { Game } from "./engine.ts";
import { Renderer } from "./render.ts";

const canvas = document.querySelector("canvas");

if (canvas === null) {
  console.error("failed to find canvas element");
  throw "failed to find canvas element";
}

const renderer = new Renderer(canvas);
const game = new Game(renderer);

game.render();
