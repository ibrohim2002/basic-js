const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let arrToSort = [];
    arr.forEach((element, index) => { if (element !== -1) { arrToSort.push(element) } });
    arrToSort.sort(function(a, b) { return a - b });

    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
            arr.splice(i, 1, arrToSort[k]);
            k++;
        }
    }
    return arr;
}

module.exports = {
    sortByHeight
};