const solution = S => {
    const upcomingClosers = []
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    for (const char of S) {
        switch (char) {
            case "(":
            case "{":
            case "[":
                upcomingClosers.push(map[char])           
                break
            default:
                if (upcomingClosers.pop() !== char) {
                    return 0
                }
                break
        }
    }
    return upcomingClosers.length === 0 ? 1 : 0
}