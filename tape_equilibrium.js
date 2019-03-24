const solution = A => {
    let minDiff = Infinity
    const sums = []
    for (let i = 0; i < A.length; i++) {
        sums.push((sums[i - 1] || 0) + A[i])
    }
    const total = sums[sums.length - 1]
    for (let i = 1; i < A.length; i++) {
        const preSum = sums[i - 1]
        const postSum = total - preSum
        const diff = Math.abs(postSum - preSum)
        if (diff < minDiff) {
            minDiff = diff
        }
    }
    return minDiff
}