const str = "{[()]}"

function valid(str) {
    const map = { '}': '{', ']': '[', ')': '(' }
    const stack = [];
    for (const s of str) {
        if (!map[s])
            if (!map[s]) {
                stack.push(s)
            } else {
                if (map[s] !== stack.pop()) {
                    return false
                }
            };
    }
    return true;
}

console.log(valid(str));