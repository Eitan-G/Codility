const incrementCounter = (n, counter = {}) => ({ ...counter, [n]: ~~counter[n] + 1 })

const solution = A => {
    const N = A.length, counts = [], lookup = {}
    let leader = A[0], equiLeaders = 0

    for (let i = 0; i < N; i++) {
        lookup[i] = ~~lookup[i] + 1
        counts.push(incrementCounter(A[i], counts[i - 1]))
    }
    const last = counts[counts.length - 1]

    for (let i = 0; i < N - 1; i++) {
        if (counts[i][A[i]] > (i + 1) / 2) {
            leader = A[i]
        } else if (counts[i][leader] <= (i + 1) / 2) {
            continue
        }
        if (last[leader] - counts[i][leader] > (N - 1 - i) / 2 ) {
            equiLeaders++
        }
    }
    return equiLeaders
}

// Times out??? 100% correctness, 75% performance - 88% overall
const solution = A => {
    const N = A.length, counts = [], lookup = {}
    let leader = A[0], equiLeaders = 0

    for (let i = 0; i < N; i++) {
        lookup[i] = ~~lookup[i] + 1
        const counter = { ...counts[i - 1] }
        counter[A[i]] = ~~counter[A[i]] + 1
        counts.push(counter)
    }
    const last = counts[counts.length - 1]

    for (let i = 0; i < N - 1; i++) {
        if (counts[i][A[i]] > (i + 1) / 2) {
            leader = A[i]
        } else if (counts[i][leader] <= (i + 1) / 2) {
            continue
        }
        if (last[leader] - counts[i][leader] > (N - 1 - i) / 2 ) {
            equiLeaders++
        }
    }
    return equiLeaders
}