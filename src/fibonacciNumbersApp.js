const getFibonacciNumbers = (number) => {
    const result = [];

    if (number <= 0) return 'Exception';        // check for minus numbers

    for (let index = 0; index < number; index++) {
        if (result.length < 1 || result.length < 2) {     // add to array 0, 1
            result.push(index);
            continue;
        }

        // add to array previous number + current number
        result.push(result[result.length - 1] + result[result.length - 2]);
    }

    return result;
};

module.exports = {
    getFibonacciNumbers
};