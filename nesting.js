const solution = S => {
    let stack = 0
    for (const char of S) {
        stack += char === "(" ? 1 : -1
        if (stack < 0) { // early exit
            return 0
        }
    }
    return stack === 0 ? 1 : 0
}