// 100% correctness, 80% performance - 90% overall

function solution(M, A) {
    let end = 0, slices = 0
    const dict = {}
    for (let start = 0; start < A.length; start++) {
        while (end < A.length && !dict[A[end]]) {
            dict[A[end]] = 1
            slices += end - start + 1
            end++
        }
        dict[A[start]] = dict[A[start]] - 1
    }
    return slices
}