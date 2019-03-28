const solution = A => {
    const boundaries = []
    for (let i = 0; i < A.length; i++) {
        boundaries.push([i - A[i], 1], [i + A[i], -1])
    }
    boundaries.sort((a, b) => a[0] - b[0] || -a[1] + b[1])
    let overlaps = 0, open = 0
    for (const [_, type] of boundaries) {
        overlaps += type === 1 ? open : 0
        open += type
        if (overlaps > 10000000) { return -1 }
    }
    return overlaps
}