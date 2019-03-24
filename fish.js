const solution = (A, B) => {
    const downstreams = []
    let dead = 0
    for (let i = 0; i < B.length; i++) {
        const size = A[i]
         if (B[i] === 1) {
             downstreams.push(size)
         } else {
             while (downstreams.length > 0) {
                 dead++
                 if (size < downstreams[downstreams.length - 1]) {
                     break
                 } else {
                     downstreams.pop()
                 }
             }
         }
    }
    return B.length - dead
}