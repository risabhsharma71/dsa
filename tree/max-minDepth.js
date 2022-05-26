function maxDepth(node) {
    if (!node) {
        return 0
    }
    let maxDepthLeft = maxDepth(node.left)
    let maxDepthRight = maxDepth(node.right)

    return 1 + Math.max(maxDepthLeft, maxDepthRight)
}
function minDepth(node) {
    if (!node) {
        return 0
    }
    let maxDepthLeft = minDepth(node.left)
    let maxDepthRight = minDepth(node.right)
    if (maxDepthLeft == 0 || maxDepthRight == 0) {
        return 1 + Math.max(maxDepthLeft, maxDepthRight)
    }

    return 1 + Math.min(maxDepthLeft, maxDepthRight)
}