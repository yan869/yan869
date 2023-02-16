function arraySort(array, compareFunction) {
    const cloned = array.slice();
    if (compareFunction) {
        return cloned.sort(compareFunction);
    }
    return cloned.sort();
}
module.exports = arraySort;