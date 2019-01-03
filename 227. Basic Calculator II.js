/**
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
 * */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let digits = s.match(/\d+/g)
    let operators = s.match(/\/|\*|\+|\-/g)
    if(!operators) return +digits[0]
    let inputs = []
    operators.unshift('+')
    for(let i=0; i<operators.length; i++){
        let digit = digits[i]
        switch(operators[i]){
            case '+':
                inputs.push(+digit)
                break;
            case '-':
                inputs.push(-digit)
                break;
            case '*':
                inputs.push(inputs.pop()*digit)
                break;
            case '/':
                inputs.push(parseInt(inputs.pop()/digit))
                break;
        }
    }
    return inputs.reduce((a,b)=>a+b)
};

console.log(calculate("14-3/2"))


