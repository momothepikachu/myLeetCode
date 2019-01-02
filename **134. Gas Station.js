/**
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

Note:

If there exists a solution, it is guaranteed to be unique.
Both input arrays are non-empty and have the same length.
Each element in the input arrays is a non-negative integer.
Example 1:

Input: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

Output: 3

Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
Example 2:

Input: 
gas  = [2,3,4]
cost = [3,4,3]

Output: -1

Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.
 * */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// solution1
// var canCompleteCircuit = function(gas, cost) {
//     function calIdx(idx){
//         if(idx<gas.length-1){
//             return ++idx
//         } else {
//             return 0
//         }
//     }
//     function go(myTank=0, stops=0, idx){
//         if(stops==0) return go(myTank+gas[idx], ++stops, idx)
//         if(stops==gas.length) return myTank>=cost[idx]
//         if(myTank>cost[idx]){
//             myTank -= cost[idx]
//             idx = calIdx(idx)
//             return go(myTank+gas[idx],++stops,idx)
//         } else return false
//     }
//     for(let i=0; i<gas.length; i++){
//         if(go(0, 0, i)) return i
//     }
//     return -1
// };
// solution2
// explanation: https://leetcode.com/problems/gas-station/discuss/128187/O(n)-time-and-O(1)-space-python-solution-with-new-idea-and-explanation
var canCompleteCircuit = function(gas, cost) {
    if(cost.reduce((total, item)=>total+item)>gas.reduce((total, item)=>total+item)) return -1
    let position = 0
    let balance = 0
    for(let i=0; i<gas.length; i++){
        balance += gas[i]-cost[i]
        if(balance<0){
            position = i+1
            balance=0
        }
    }
    return position
};

console.log(canCompleteCircuit([5,1,2,3,4],[4,4,1,5,1]))
