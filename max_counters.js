const solution = (totalCounters, operations) => {
    const counters = Array(totalCounters).fill(0)
    let currentMax = 0
    let shouldMax = 0

    operations.forEach(n => {
        n-- // Zero-index it
        if (n < totalCounters) {
            if (counters[n] < shouldMax) {
                counters[n] = shouldMax
            }
            counters[n]++
            if (counters[n] > currentMax) {
                currentMax = counters[n]
            }
        } else {
            shouldMax = currentMax
        }
    })
    
    return counters.map(counter => Math.max(shouldMax, counter))
}