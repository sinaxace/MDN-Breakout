/* MDN HTML Canvas Tutorial Link:
    https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

    Game TODOs: 
        - Make ball bounce more angled instead of just bouncing opposite to it's previous direction.
        - Add a sound for every time the ball bounces off anything.
        - Keep track of a scoring for when the ball bounces off the paddle.

    Bug TODOs:
        - Ball occationally gets stuck in between a wall & goes colour crazy.
        - Ball sometimes changes colour randomly during mid-movement.
*/

// Class Imports
import Ball from "./classes/Ball.js";
import Paddle from "./classes/Paddle.js";

// Function Imports
import drawBall from "./functions/drawBall.js";
import drawPaddle from "./functions/drawPaddle.js";
import random from "./functions/random.js";

// First & foremost is to get the canvas element & set up it's properies.
const CANVAS = document.getElementsByTagName("canvas")[0],
    CTX = CANVAS.getContext("2d"); // for 2D canvas-specific properties

/* Setting canvas to window width & height */
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

/* Most basic attributes for starting canvas */
CTX.strokeStyle = "#000000"; // for color, gradient or pattern.
CTX.lineWidth = 30;           // canvas lines width measurements.
CTX.lineJoin = "round";     // the connection point for when 2 lines meet.
CTX.lineCap = "round";      // style of the end caps for a line

// here we have a Ball singleton object that will show visually within the canvas after being drawn.
const BALL = new Ball(CTX.canvas.width / 2, CTX.canvas.height - 300, 30, random(5, -5), random(5, -5), "rgb(90, 30, 40)"),
    PADDLE = new Paddle(200, 40, (CTX.canvas.width - 75) / 2, "rgb(90, 30, 40)");

// This mousemove event updates the paddle's direction property with the cursor's offsetX value.
CANVAS.addEventListener("mousemove", (cursor) => PADDLE.setPosition(cursor.offsetX));


draw(); // it's called at 60fps because we're using requestAnimationFrame(callback) inside draw

/**
 * @author Sina Lyon
 * 
 * @function draw is the main starting point for any canvas animations. It's the callback 
 *              function for requestAnimationFrame in order to loop through the animation
 *              at 60 frames per second.
 * @description
 *      References:
 *      requestAnimationFrame --> https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
 */
function draw() {
    // first clear the canvas clutter (the ball's trailing line)
    CTX.clearRect(0, 0, CTX.canvas.width, CTX.canvas.height); // clearRect( top left x & y, bottom right x & y)

    // then we call functions to start drawing (Always good to keep specific draw code seperate)
    drawBall(BALL, CTX);
    drawPaddle(PADDLE, CTX);

    /* The following if-else block increments positioning to move the ball */
    if (BALL.y > CTX.canvas.height - BALL.radius || BALL.y < 0 + BALL.radius) { // if ball touches bottom or top of it's circumference
        BALL.moveX(BALL.directX);
        BALL.moveY(-BALL.directY);
        BALL.setColour(`rgb(${random(255, 0)}, ${random(255, 0)}, ${random(255, 0)})`); // change to random colour on bounce
    } else if (BALL.x > CTX.canvas.width - BALL.radius || BALL.x < 0 + BALL.radius) { // if ball touches right or left of it's circumference
        BALL.moveX(-BALL.directX);
        BALL.moveY(BALL.directY);
        BALL.setColour(`rgb(${random(255, 0)}, ${random(255, 0)}, ${random(255, 0)})`); // change to random colour on bounce
    } else if (BALL.x > PADDLE.position && BALL.x < (PADDLE.position + PADDLE.width) // Note on condition: if ball is in between paddle's width...
        && BALL.y > (CTX.canvas.height - PADDLE.height - 30)) {                    // ...and at the level of paddle's offsetted y position then...
        // TODO: Make ball bounce more angled instead of just bouncing opposite to it's previous direction.
        BALL.moveX(-BALL.directX);
        BALL.moveY(-BALL.directY);
    } else { // else move the usual direction
        BALL.moveX(BALL.directX);
        BALL.moveY(BALL.directY);
    }

    requestAnimationFrame(draw); // this is what makes the animation redo

} // end of draw()