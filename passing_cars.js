const solution = A => {
    let eastboundCounter = 0
    let passes = 0
    for (const direction of A) {
        if (direction === 0) {
            eastboundCounter++
        } else {
            passes += eastboundCounter
            if (passes > 1e9) { return -1 }
        }
    }
    return passes
}