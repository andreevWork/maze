export default function (canvas) {
    const maze = [
        [0,0,0,0,0,0,0,1,0,0,1,0],
        [0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,1,0,1,0,1,1,0,0,1,0],
        [0,1,0,0,1,0,0,1,0,0,1,0],
        [0,1,1,0,1,0,1,1,0,0,1,0],
        [0,1,1,0,0,0,1,1,0,0,1,0],
        [0,1,1,1,1,0,1,1,0,0,1,0],
        [0,1,1,1,1,0,1,1,0,0,1,0],
        [0,1,1,1,1,0,1,1,0,0,1,0],
        [0,1,0,0,1,0,0,0,0,0,0,0]
    ];

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const cell_h = height / maze.length;
    const cell_w = width / maze[0].length;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "red";

    maze.forEach((row, i) => {
        row.forEach((has_wall, j) => {
            if (has_wall) {
                ctx.rect(j * cell_w,i * cell_h, cell_w, cell_h);
                ctx.fill();
            }
        });
    });
}