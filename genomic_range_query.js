const NUCLEOTIDES = ["A", "C", "G", "T"]
const IMPACTFACTORS = NUCLEOTIDES.reduce((acc, elem, i) => ({ ...acc, [elem]: i + 1 }), {})

const solution = (S, P, Q) => {
    const counters = []
    const currentCounter = NUCLEOTIDES.reduce((acc, char) => ({ ...acc, [char]: 0 }), {})
    for (let i = 0; i <= S.length; i++) {
        counters.push({ ...currentCounter })
        currentCounter[S[i]]++
    }

    const minimums = []
    for (let i = 0; i < P.length; i++) {
        const startCount = counters[P[i]]
        const endCount = counters[Q[i] + 1]
        let minimum = IMPACTFACTORS[NUCLEOTIDES[NUCLEOTIDES.length - 1]]
        for (const nucleotide of NUCLEOTIDES) {
            if (endCount[nucleotide] > startCount[nucleotide]) {
                minimum = IMPACTFACTORS[nucleotide]
                break
            }
        }
        minimums.push(minimum)
    }
    return minimums
}