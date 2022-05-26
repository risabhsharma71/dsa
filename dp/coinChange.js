//https://www.youtube.com/watch?v=J0C_FDmYwpg


function coinChange(coins, amt) {
    if (amt == 0 || coins.length == 0) {
        return 0
    }
    let dp = new Array(amt + 1).fill(amt + 1)
    dp[0] = 0
    for (let i = 0; i < coins.length; i++) {
        console.log("for loop for i at ", i)
        for (let j = coins[i]; j <= amt; j++) {
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
            console.log("for loop for j at dp ", dp)
        }
    }
    return dp
}
let coins = [1, 2, 5]
let amt = 4
console.log(coinChange(coins, amt))