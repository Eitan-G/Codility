const solution = A => {
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity
    let min1 = Infinity
    let min2 = Infinity

    for (let i = 0; i < A.length; i++) {
        let current = A[i]
        if (current > max1) {
            max3 = max2
            max2 = max1
            max1 = current
        } else if (current > max2) {
            max3 = max2
            max2 = current
        } else if (current > max3) {
            max3 = current
        }
        if (current < min1) {
            min2 = min1
            min1 = current
        } else if (current < min2) {
            min2 = current
        }
    }
    
    return Math.max(max1 * max2 * max3, min1 * min2 * max1)
}