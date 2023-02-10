import { Keys, KeysPressed } from "./types";
import { Position, VELOCITY, TILE_WIDTH } from "./types";

export interface IBoundary {
  ctx: CanvasRenderingContext2D;
  position: Position;
  zoomScale: number
}

class Boundary {
  ctx: CanvasRenderingContext2D;
  position: Position;
  width: number;
  height: number;
  color: string;

  constructor({ position, ctx, zoomScale }: IBoundary) {
    this.position = position;
    this.width = TILE_WIDTH * zoomScale; // 
    this.height = TILE_WIDTH * zoomScale;
    this.ctx = ctx;
    this.color = `rgba(255, 0, 0, 0.5)`;
  }

  draw() {
    const { x, y } = this.position;
    // this.ctx.fillStyle = this.color;
    // this.ctx.fillRect(x, y, this.width, this.height);
  }

  handleKeyboardInput(key: KeysPressed, collisionDirection?: Keys) {
    if (collisionDirection) return;
    if (key[Keys.W].pressed) {
      if (collisionDirection && collisionDirection === Keys.W) return;

      this.position.y += VELOCITY;
    } else if (key[Keys.S].pressed) {
      if (collisionDirection && collisionDirection === Keys.S) return;
      this.position.y -= VELOCITY;
    } else if (key[Keys.A].pressed) {
      if (collisionDirection && collisionDirection === Keys.A) return;
      this.position.x += VELOCITY;
    } else if (key[Keys.D].pressed) {
      if (collisionDirection && collisionDirection === Keys.D) return;
      this.position.x -= VELOCITY;
    }
  }
}

export default Boundary;
