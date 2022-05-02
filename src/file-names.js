const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let result = [];

    names.forEach((e, i) => {
        let arrOfSame = names.slice(0, i);
        if (arrOfSame.length > 0 && arrOfSame.includes(e)) {
            result.push(e + `(${arrOfSame.lastIndexOf(e) + 1})`);
        } else if (arrOfSame.length > 0 && result.includes(e)) {
            result.push(e + `(${result.lastIndexOf(e)})`);

        } else { result.push(e) };
    })
    return result;
}

module.exports = {
    renameFiles
};