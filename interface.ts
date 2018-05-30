interface RectangleOptions {
    width: number;
    length: number;
    height ? : number; //option
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;

    if (options.height) {
        let height = options.height;
        // Draw 3D rectangle
    }
    //Draw logic
}

drawRectangle({
    width: 100,
    length: 50
});