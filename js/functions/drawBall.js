/**
 * @author Sina Lyon
 * 
* @function drawBall simply creates the ball's shape & size before the rest of the
*              motioning in draw function happens.
* @param {*} ball is teh global Ball object from script.js
* @param {*} context contains the CanvasRenderingContext2D object to draw on the canvas.
*/
export default function drawBall(ball, context) {
    context.beginPath(); // starts drawing instructions
    // drawing the ball
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = ball.colour;
    context.fill();
    // finished drawing the ball
    context.closePath(); // closes drawing sequence
}