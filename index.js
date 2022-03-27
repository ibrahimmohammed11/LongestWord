function findLongest(str) {
    let newArr = str.split(" ");
    let long = newArr.reduce((acc, current) =>  acc.length < current.length ? current : acc);
    return long;
}


module.exports.findLongest = findLongest;
// console.log(findLongest("Js program to search largest word from a string"));