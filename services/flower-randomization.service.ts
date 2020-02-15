import { Flower } from '../models/flower';
import { Point } from '../models/point';
import { FlowerCenter } from '../models/flower-center';
import { Petal } from '../models/petal';

export class FlowerRandomizationService {
  private readonly colors = [
    '#f10e57',
    '#ea767a',
    '#ff6d3d',
    '#ecac43',
    '#fb9983',
    '#f9bc9f',
    '#f8ed38',
    '#a8e3f9',
    '#d1f2fd',
    '#ecd5f5',
    '#fee4fd',
    '#8520b4',
    '#fa2e59',
    '#ff703f',
    '#ff703f',
    '#f7bc05',
    '#ecf6bb',
    '#76bcad'
  ];

  constructor() {}

  getFlowerAt(point: Point): Flower {
    const flowerCenter = new FlowerCenter(
      point,
      this.randomIntFromInterval(15, 22),
      '#ffff00'
    );
    const numberOfPetals = this.randomIntFromInterval(8, 15);
    const petalAngleSpacing = this.randomIntFromInterval(5, 6);
    const petalAngleSpan = 360 / numberOfPetals - petalAngleSpacing;
    const petal = new Petal(
      point,
      this.randomIntFromInterval(30, 60),
      this.randomIntFromInterval(9, 14) / 10,
      petalAngleSpan,
      '#fffff0'
    );
    return new Flower(flowerCenter, numberOfPetals, petal);
  }

  getFlowerOnCanvas(canvasWidth: number, canvasHeight: number): Flower {
    return this.getFlowerAt(
      new Point(
        this.randomIntLessThan(canvasWidth),
        this.randomIntLessThan(canvasHeight)
      )
    );
  }

  private randomIntFromInterval(min: number, max: number): number {
    // min: inclusive; max: exclusive
    return Math.floor(Math.random() * (max - min) + min);
  }

  private randomIntLessThan(n: number): number {
    return this.randomIntFromInterval(0, n);
  }

  private randomColor(): string {
    return this.colors[this.randomIntLessThan(this.colors.length)];
  }
}
