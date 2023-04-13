function intr(a, b) {
    let arr = [...new Set([...a].filter(x => new Set(b).has(x)))]
    return arr;
}

module.exports = intr