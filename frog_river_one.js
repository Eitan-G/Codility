const solution = (X, A) => {
    const dictionary = {}
    const seenNumbers = []
    for (let i = 0; i < A.length; i++) {
        const current = A[i]
        if (!dictionary[current]) {
            seenNumbers.push(null)
        }
        if (seenNumbers.length === X) {
            return i
        }
        dictionary[current] = true
    }
    return -1
}