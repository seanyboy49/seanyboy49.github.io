import { useCallback } from "react";
import pelletTownSrc from "../images/pellet-town.png";
import playerUpSrc from "../images/player-up.png";
import playerDownSrc from "../images/player-down.png";
import playerRightSrc from "../images/player-right.png";
import playerLeftSrc from "../images/player-left.png";

import Sprite from "../classes/Sprite";
import collisions from "../data/collisions";
import Game from "../classes/Game";
import useCanvas from "../hooks/useCanvas";

export const OFFSET = {
  x: -735,
  y: -650,
} as const;

// Width/Height in tiles
export const MAP_DIMENSIONS = {
  width: 70,
  height: 40,
} as const;

// Set up collision boundaries
const collisionsMap: Array<number[]> = [];
// map is 70 tiles map and 40 tiles tall
for (let i = 0; i < collisions.length; i += MAP_DIMENSIONS.width) {
  collisionsMap.push(collisions.slice(i, i + MAP_DIMENSIONS.width));
}

const GameBoard = () => {
  const setUpGame = useCallback((ctx: CanvasRenderingContext2D) => {
    const background = new Sprite({
      ctx: ctx,
      position: { x: OFFSET.x, y: OFFSET.y },
      imageSrc: pelletTownSrc,
    });

    const player = new Sprite({
      ctx: ctx,
      position: { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2 },
      imageSrc: playerDownSrc,
      frames: { total: 4, rate: 10 },
      sprites: {
        up: playerUpSrc,
        down: playerDownSrc,
        left: playerLeftSrc,
        right: playerRightSrc,
      },
      movable: false,
    });

    const game = new Game({
      ctx,
      background,
      player,
      collisions: collisionsMap,
    });

    return game;
  }, []);

  const canvas = useCanvas(setUpGame);

  return <canvas ref={canvas} />;
};

export default GameBoard;
