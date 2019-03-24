const solution = A => {
    if (A.length < 2) {
        return 0
    }
    let minimum = Infinity
    maxDiff = 0
    for (const i of A) {
        if (i < minimum) {
            minimum = i
        }
        if (i - minimum > maxDiff) {
            maxDiff = i - minimum
        }
    }
    return maxDiff
}