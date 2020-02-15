// Import stylesheets
import './style.css';

// Write TypeScript code!
import { BloomingFlowers } from './animations/blooming-flowers';

const canvas = <HTMLCanvasElement>document.getElementById('flower');
const flowers = new BloomingFlowers(canvas);
flowers.bloom();



// a dirty way to make recursive animation play. 
// simply to add some attraction to this demo :)
window.setInterval(() => {
  const flowers = new BloomingFlowers(canvas);
  flowers.bloom();
}, 8000);