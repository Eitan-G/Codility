const solution = A => {
    const dictionary = {}
    let uniquePositives = 1 // 1 is always an option
    for (const i of A) {
        if (i > 0) {
            dictionary[i] || uniquePositives++
            dictionary[i] = true
        }
    }
    for (let i = 1; i < uniquePositives + 1; i++) {
        if (!dictionary[i]) {
            return i
        }
    }
}