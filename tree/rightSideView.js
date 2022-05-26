

function levelOrderTraversalRightSide(root) {
    if (!root) {
        return []
    }
    let queue = [root]
    let result = []
    while (queue.length) {
        let len = queue.length
        //for left view do queue[0]
        result.push(queue[queue.length - 1].val)
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