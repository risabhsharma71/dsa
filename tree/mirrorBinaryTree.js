var invertTree = function(root) {
    const reverseNodes=(node)=>{
        if(node ==null) return
        
        reverseNodes(node.left)
        reverseNodes(node.right)
        
        let temp = node.left
       node.left = node.right
        node.right = temp
        
    }
    reverseNodes(root)
    return root
};