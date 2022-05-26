

function checkIfValidBST(leftLimit, node, rightLimit) {
    if (node === null) return true;

    return (leftLimit < node.val &&
        node.val < rightLimit) &&
        checkIfValidBST(leftLimit, node.left, node.val) &&
        checkIfValidBST(node.val, node.right, rightLimit);
}

var isValidBST = function (root) {
    return checkIfValidBST(-Infinity, root, Infinity);
}

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}

function newNode(data) {
    let temp = new Node(data);
    return temp;
}

root = newNode(8);
root.left = newNode(4);
root.right = newNode(10);
root.left.left = newNode(3);
root.left.right = newNode(5);
root.right.right = newNode(7);


console.log(isValidBST(root))
