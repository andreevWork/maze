export default function () {
    const canvas = document.getElementById("canvas") || document.createElement('canvas');
    const canvas_container = document.getElementById("canvas_container");
    const {offsetWidth, offsetHeight} = canvas_container;

    const margin_w = offsetWidth / 10;
    const margin_h = offsetHeight / 10;
    const border = 1;
    const border_color = "white";

    canvas.id = "canvas";
    canvas.width = offsetWidth - 2 * margin_w - border * 2;
    canvas.height = offsetHeight - 2 * margin_h - border * 2;
    canvas.style.margin = `${margin_h}px ${margin_w}px`;
    canvas.style.border = `${border}px solid ${border_color}`;
    canvas.style.display = "block";

    return canvas_container.appendChild(canvas);
}