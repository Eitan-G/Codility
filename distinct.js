// O(N)
const solution = A => {
    const lookup = {}
    let unique = 0
    for (const i of A) {
        if (!lookup[i]) {
            lookup[i] = true
            unique++
        }
    }
    return unique
}

// This is in the sorting section so I guess they want this to use sort? ¯\_(ツ)_/¯
// O(N log N)
const solution = A => {
    return A.sort().reduce((sum, i, idx) => i === A[idx - 1] ? sum : sum + 1, 0)
}