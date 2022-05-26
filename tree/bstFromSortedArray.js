var sortedArrayToBST = function (nums) {
    return build(nums)
};

const build = (nums) => {
    if (nums.length < 1) return null
    const mid = Math.floor(nums.length / 2)
    let treeNode = new TreeNode(nums[mid])

    treeNode.left = build(nums.slice(0, mid))
    treeNode.right = build(nums.slice(mid + 1))
    return treeNode
}