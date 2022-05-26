
//recursive
function PreOrderTraversal(root) {
    let result = []
    traverse(root)
    function traverse(node) {
        result.push(node.val)
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.left)
    }
}


//iterative
function preOrderTraversal(root){
    let stack =[root]
    let result =[]
    while(root.length){
       let currentNode = stack.pop()
    result.push(currentNode.val)
    if(currentNode.right) stack.push(currentNode.right)
     if (currentNode.left) stack.push(currentNode.left)
    }
    return result
}

