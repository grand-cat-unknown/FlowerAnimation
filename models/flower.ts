import { Petal } from './petal';
import { FlowerCenter } from './flower-center';

export class Flower {
  constructor(
    private readonly flowerCenter: FlowerCenter,
    private readonly numberOfPetals: number,
    private petal: Petal
  ) { }

  draw(context: CanvasRenderingContext2D) {
    this.drawPetals(context);
    this.flowerCenter.draw(context);
  }

  increasePetalRadius() {
    this.petal = new Petal(
      this.petal.centerPoint,
      this.petal.radius + 0.05,
      this.petal.tipSkewRatio,
      this.petal.angleSpan +0.01,
      this.petal.color
    );
  }

  private drawPetals(context: CanvasRenderingContext2D) {
    context.save();
    const rotateAngle = (2 * Math.PI) / this.numberOfPetals ;
    for (let i = 0; i < this.numberOfPetals * 2; i++) {
      context.translate(this.petal.centerPoint.x, this.petal.centerPoint.y);
      context.rotate(rotateAngle);
      context.translate(-this.petal.centerPoint.x, -this.petal.centerPoint.y);
      this.petal.draw(context);
    }

    const rotateAngle = (2 * Math.PI) / this.numberOfPetals +1;
    for (let i = 0; i < 3 ; i++) {
      context.translate(this.petal.centerPoint.x, this.petal.centerPoint.y);
      context.rotate(rotateAngle);
      context.translate(-this.petal.centerPoint.x, -this.petal.centerPoint.y);
      this.petal.draw(context);
    }
    context.restore();
  }
}
