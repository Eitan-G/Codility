function solution(N) {
    let maxGap = 0
    let currentGap = 0
    while (N > 0 && N % 2 === 0) {
        N >>= 1
    }
    while (N > 0) {
        if (N % 2 === 0) {
            currentGap++
        } else {
            maxGap = currentGap > maxGap ? currentGap : maxGap
            currentGap = 0
        }
        N >>= 1
    }
    return maxGap
}