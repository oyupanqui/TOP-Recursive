function mergeSort (array) {
    const chunk = Math.floor(array.length / 2)

    const left = array.slice(0, chunk)
    const right = array.silce(chunk, array.length)
    
    // Sort left half
    // Sort right half
    // Merge halves
    return array
}
//console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]))

let arr = [6, 5, 3, 1, 8, 7, 2, 4]
