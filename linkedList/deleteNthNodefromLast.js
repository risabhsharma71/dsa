var removeNthFromEnd = function (head, n) {
    let dummyHead = new ListNode(-1)
    dummyHead.next = head
    let resultNode = dummyHead
    counter = 0
    let tail = head
    while (counter < n) {
        tail = tail.next
        counter++
    }
    let removeNode = head
    let prevNode = dummyHead
    while (tail) {
        tail = tail.next
        prevNode = prevNode.next
        removeNode = removeNode.next
    }
    prevNode.next = removeNode.next
    return resultNode.next
};