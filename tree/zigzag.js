
var zigzagLevelOrder = function (root) {
    if (!root) {
        return []
    }

    let queue = [root]
    let result = []
    let count = 1

    while (queue.length) {
        let len = queue.length
        if (count % 2) {
            result.push(queue.map(node => node.val))
        } else {
            result.push(queue.map(node => node.val).reverse())
        }
        count++

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
};