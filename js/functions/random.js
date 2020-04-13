/**
 * @author Sina Lyon
 * 
 * @function random simply makes generating a random number easier to look at.
 * @param {*} max contains the maximum number limit.
 * @param {*} min contains the minimum number limit.
 * @description 
 *      References:
 *          Math.random() --> https://devdocs.io/javascript/global_objects/math/random
 */
export default function random(max, min) {
    return Math.random() * (max - min) + min;
}