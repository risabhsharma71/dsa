// Write a code for the below questions by using async - await and sleep functions.
// Expected o / p:
// print A then waits for 3 seconds then print B then wait for 3 seconds then print C.

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}


async function main(ms) {
    console.log("hello")
    await sleep(ms)
    console.log("world")
    await sleep(ms)
    console.log("ok bye")

}
main(3000)
