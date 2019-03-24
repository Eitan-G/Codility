const solution = (A, K) => {
    const dupe = [...A]
    for (let i = 0; i < A.length; i++) {
        A[(i + K) % A.length] = dupe[i]
    }
    return A
}