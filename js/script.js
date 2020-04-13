/* MDN HTML Canvas Tutorial Link:
    https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
*/
import Ball from "./classes/Ball.js";

// First & foremost is to get the canvas element & set up it's properies.
const CANVAS = document.getElementsByTagName("canvas")[0],
    CTX = CANVAS.getContext("2d"), // for 2D canvas-specific properties
    CW = CANVAS.width = window.innerWidth,
    CH = CANVAS.height = window.innerHeight;

/* Most basic attributes for starting canvas */
CTX.strokeStyle = "#000000"; // for color, gradient or pattern.
CTX.lineWidth = 30;           // canvas lines width measurements.
CTX.lineJoin = "round";     // the connection point for when 2 lines meet.
CTX.lineCap = "round";      // style of the end caps for a line

// here we have a Ball singleton object that will show visually within the canvas after being drawn.
const BALL = new Ball(CW / 2, CH - 300, 50, random(5, -5), random(5, -5), "rgb(90, 30, 40)");

draw(); // it's called at 60fps because we're using requestAnimationFrame(callback) inside draw()

/**
 * @function draw is the main starting point for any canvas animations. It's the callback 
 *              function for requestAnimationFrame in order to loop through the animation
 *              at 60 frames per second.
 */
function draw() {
    // first clear the canvas clutter (the ball's trailing line)
    CTX.clearRect(0, 0, CW, CH); // clearRect( top left x & y, bottom right x & y)

    // then we call a function to start drawing (Always good to keep specific draw code seperate)
    drawBall(BALL);

    /* The following if-else block increments positioning to move the ball */
    if (BALL.y > CH - BALL.radius || BALL.y < 0 + BALL.radius) { // if ball touches bottom or top of it's circumference
        BALL.moveX(BALL.directX);
        BALL.moveY(-BALL.directY);
        BALL.setColour(`rgb(${random(255, 0)}, ${random(255, 0)}, ${random(255, 0)})`); // change to random colour on bounce
    } else if (BALL.x > CW - BALL.radius || BALL.x < 0 + BALL.radius) { // if ball touches right or left of it's circumference
        BALL.moveX(-BALL.directX);
        BALL.moveY(BALL.directY);
        BALL.setColour(`rgb(${random(255, 0)}, ${random(255, 0)}, ${random(255, 0)})`); // change to random colour on bounce
    } else { // else move the usual direction
        BALL.moveX(BALL.directX);
        BALL.moveY(BALL.directY);
    }

    requestAnimationFrame(draw); // this is what makes the animation redo

} // end of draw()


/**
* @function drawBall simply creates the ball's shape & size before the rest of the
*              motioning in draw function happens.
*/
function drawBall(ball) {
    CTX.beginPath(); // starts drawing instructions
    // drawing the ball
    CTX.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    CTX.fillStyle = ball.colour;
    CTX.fill();
    // finished drawing the ball
    CTX.closePath(); // closes drawing sequence
}

/**
 * @function random simply makes generating a random number easier to look at.
 * @param {*} max contains the maximum number limit.
 * @param {*} min contains the minimum number limit.
 * @description 
 *      References:
 *          Math.random() --> https://devdocs.io/javascript/global_objects/math/random
 */
function random(max, min) {
    return Math.random() * (max - min) + min;
}