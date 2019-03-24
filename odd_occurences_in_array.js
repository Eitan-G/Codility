const solution = A => {
    let bitmask = 0
    for (const i of A) { bitmask ^= i }
    return bitmask
}