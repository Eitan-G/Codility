const solution = (A, B, K) => {
    return A % K === 0 ? Math.floor((B - A) / K + 1) : solution(A + K - A % K, B, K)
}