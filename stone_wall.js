function Stack() {
    const stack = []
    this.last = () => stack[stack.length - 1]
    this.add = obj => stack.push(obj)
    this.pop = () => stack.pop()
}

const solution = H => {
    const openBlocks = new Stack()
    openBlocks.add(H[0])
    let closedBlocks = 0
    for (let i = 1; i < H.length; i++) {
        let current = H[i]
        if (current === openBlocks.last()) { continue }
        if (current > openBlocks.last()) {
            openBlocks.add(current)
        } else {
            while(current < openBlocks.last()) {
                openBlocks.pop()
                closedBlocks++
            }
            if (current !== openBlocks.last()) {
                openBlocks.add(current)
            }
        }
    }
    while(openBlocks.length > 0) {
        openBlocks.pop()
        closedBlocks++
    }
    return closedBlocks
}