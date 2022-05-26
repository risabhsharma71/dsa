

function levelOrderTraversal(root) {
    if (!root) {
        return []
    }
    let queue = [root]
    let result = []
    while (queue.length) {
        let len = queue.length
        result.push(queue.map((node) => node.val))
        while (len) {
            let currentNode = queue.shift()
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
            len--
        }
    }
    return result
}
//
[[],[],[]]