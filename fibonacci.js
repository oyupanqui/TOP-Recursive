function fibs (num) {
    let prev = 0
    let now = 1
    let array = []
    if (num > 0) {
        for (let i = 0; i <= num; i++) {
            if (i === 0) {
                array.push(prev)
            }
            if (i === 1) {
                array.push(now)
            }
            if (i > 2) {
                sum = prev + now
                array.push(sum)
                prev = now
                now = sum
            }
        }
    }
    return array
}

//console.log(fibs(10))

function fibsRec (num) {
    if (num === 1) {
        return [0]
    }
    if (num === 2) {
        return [0, 1]
    }
    if (num > 2) {
        return [...fibsRec(num - 1), fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]];
    }
    
}
//console.log(fibsRec(10))