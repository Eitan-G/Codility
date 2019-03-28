const solution = A => {
    const N = A.length
    A.sort((a, b) => a - b)
    for (let i = 0; i < N - 2; i++) {
        if (A[i] + A[i + 1] > A[i + 2]) { return 1 }
    }
    return 0
}