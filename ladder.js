function solution(A, B) {
    const result = [1, 1]
    for (let i = 1; i < A.length; i++) {
        result.push((result[i] + result[i - 1]) % 2 ** 30 )
    }
    return A.map((elem, idx) => result[elem] % 2 ** B[idx])
}