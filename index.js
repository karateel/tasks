// Input: solution([2,3,6,7], 7)
// Output:
//     [
//         [7],
//         [2,2,3]
//     ]
const solution = (c, t) => {
    const result = [];
        for (let i = 1; i < c.length; i++){
            for (let j = 1; j < c.length;j++){
                if (c[i] + c[j] === t){
                    result.push(i);
                    result.push(j);
                }
            }
        }
    return result
}

console.log(solution([2,3,6,7], 7))
