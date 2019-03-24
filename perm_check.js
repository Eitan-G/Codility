const solution = A => {
    const dictionary = {}
    for (const i of A) { dictionary[i] = true }
    for (let i = 1; i < A.length + 1; i++) {
        if (!dictionary[i]) { return 0 }
    }
    return 1
}