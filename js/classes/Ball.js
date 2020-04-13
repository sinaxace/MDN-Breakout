/**
 * @author Sina Lyon
 * 
 * @class Ball holds all properties that pertain to a ball
 *          object, including methods to the ball's behaviour.
 */
export default class Ball {

    /**
     * @constructor initializes a ball object with starting values.
     * @param {*} x is the ball's current x value.
     * @param {*} y is the ball's current y value.
     * @param {*} radius is the size of the 2d ball.
     * @param {*} directX points the ball to go left or right.
     * @param {*} directY points the ball to go up or down.
     * @param {*} colour contains a string of an rgb colour value.
     */
    constructor(x, y, radius, directX, directY, colour) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.directX = directX;
        this.directY = directY;
        this.colour = colour;
    }

    /**
     * 
     * @param {*} colour contains a new colour with an rgb string.
     */
    setColour(colour) {
        this.colour = colour;
    }

    /**
     * @method moveX increments this.x value to change it's x position.
     * @param {*} direction is the number to increment the ball's x data field.
     */
    moveX(direction) {
        this.x += direction;
        this.directX = direction;
    }

    /**
     * @method moveY increments this.y value to change it's y position.
     * @param {*} drawY is the number to increment the ball's y data field.
     */
    moveY(direction) {
        this.y += direction;
        this.directY = direction;
    }
}