import "./style/app.scss";
import addCanvasToDOM from './scripts/addCanvasToDOM';
import renderMaze from './scripts/renderMaze';

let canvas;

window.addEventListener('resize', () => {
    addCanvasToDOM();
    renderMaze(canvas);
});

canvas = addCanvasToDOM();
renderMaze(canvas);