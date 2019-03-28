const solution = A => {
    const len = A.length, prefixLeaders = [], lookup = {}
    let equiLeaders = 0, count = {}

    for (let i = 0; i < len; i++) {
        const half = (i + 1) / 2, previousLeader = prefixLeaders[i - 1]
        lookup[A[i]] = ~~lookup[A[i]] + 1

        if (lookup[A[i]] > half) {
            prefixLeaders.push(A[i])
        } else if (lookup[previousLeader] > half) {
            prefixLeaders.push(previousLeader)
        } else {
            prefixLeaders.push(null)
        }
    }

    for (let i = 0; i < len; i++) {
        count[A[i]] = ~~count[A[i]] + 1
        let current = prefixLeaders[i]
        const isPreLeader = count[current] > (i + 1) / 2,
              isPostLeader = lookup[current] - count[current] > (len - 1 - i) / 2

        if ( isPreLeader && isPostLeader ) {
            equiLeaders++
        }
    }
    return equiLeaders
}