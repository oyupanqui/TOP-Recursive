function mergeSort (array) {
    if (array.length === 1) {
        return array
    }

    const chunk = Math.floor(array.length / 2)

    const left = array.slice(0, chunk)
    const right = array.slice(chunk, array.length)
    
    return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
    const result = []

    let leftIx = 0
    let rightIx = 0

    while (leftIx < left.length && rightIx < right.length) {
        if (left[leftIx] < right[rightIx]) {
            result.push(left[leftIx])
            leftIx++
        } else {
            result.push(right[rightIx])
            rightIx++
        }
    }

    while (leftIx < left.length) {
        result.push(left[leftIx])
        leftIx++
    }

    while (rightIx < right.length) {
        result.push(right[rightIx])
        rightIx++
    }

    return result
}

console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]))
