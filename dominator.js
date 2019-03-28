const solution = A => {
    const half = A.length / 2
    const lookup = {}
    for (let i = 0; i < A.length; i++) {
        let current = A[i]
        lookup[current] = lookup[current] ? lookup[current] + 1 : 1
        if (lookup[current] > half) {
            return i
        }
    }
    return -1
}