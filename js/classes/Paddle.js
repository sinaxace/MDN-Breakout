/**
 * @author Sina Lyon
 * 
 * @class Paddle contains data relavent to the game object.
 */
export default class Paddle {
    /**
     * @constructor will initialize a constant singleton object which will exist for the entire game.
     * @param {*} width is the paddle object's top & bottom measurements.
     * @param {*} height is the paddle's side measurements
     * @param {*} position is the x value of the paddle (no need for a y value).
     * @param {*} colour contains a string with an rgb colour value.
     */
    constructor(width, height, position, colour) {
        this.width = width;
        this.height = height;
        this.position = position;
        this.colour = colour;
    }

    /**
     * @method setPosition simply sets the paddle's position data field with a new position argument.
     * @param {*} position holds the paddle's new x position from the mouse cursor.
     */
    setPosition(position) {
        // the subtracting is just to make sure the paddle's center follows the cursor.
        this.position = position - (this.width / 2);
    }
}