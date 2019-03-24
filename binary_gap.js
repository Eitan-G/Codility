function solution(N) {
    const string = N.toString(2) //What is time complexity of toString(2)?
    let currentGap = 0
    let longestGap = 0
    for (const byte of string) {
        if (parseInt(byte)) {
            if (currentGap > longestGap) { longestGap = currentGap }
            currentGap = 0
        } else {
            currentGap++
        }
    }
    return longestGap
}