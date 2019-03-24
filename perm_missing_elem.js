const solution = A => {
    const dictionary = {}
    for (const i of A) { dictionary[i] = true }
    for (let i = 1; i < A.length + 2; i++) {
        if (!dictionary[i]) {
            return i
        }
    }
}