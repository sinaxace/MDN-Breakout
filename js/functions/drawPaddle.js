/**
 * @author Sina Lyon
 * 
 * @function drawPaddle will handle drawing the rectangle using the 
 *              paddle parameter's properties.
 * @param {*} paddle is the global Paddle object from script.js
 * @param {*} context contains the CanvasRenderingContext2D object to draw on the canvas.
 */
export default function drawPaddle(paddle, context) {
    context.beginPath();
    context.rect(paddle.position, context.canvas.height - paddle.height, paddle.width, paddle.height);
    context.fillStyle = paddle.colour;
    context.fill();
    context.closePath();
}