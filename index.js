let solution = function (c, t) {
    let result = []
    if (c.length === 0) {
        return result;
    }
    let current = []
    findNumbers(c, t, 0, current, result);
    return result;
};

const findNumbers = function (c, t, i, current, result) {
    if (t === 0) {
        const temp = current.slice();
        result.push(temp);
        return;
    }

    for (let j = i; j < c.length; j++) {
        if (t < c[j]) {
            return;
        }
        current.push(c[j]);
        findNumbers(c, t - c[j], j, current, result);
        current.pop();
    }
}

console.log(solution([2, 3, 6, 7], 7));
console.log(solution([2, 3, 5], 8))
