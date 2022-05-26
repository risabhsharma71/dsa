function maxEveryLevel(root){
    if (!root){
        return []
    }
    let queue=[root]
    let result =[]
    while(queue.length){
        let len = queue.length
        let temp = queue.map(node=>node.val)
        temp =Math.max(...temp)
        result.push(temp)
    while(len--){
        let currentNode = queue.shift()
        if(currentNode.left)queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
    }
    }
    return result

}