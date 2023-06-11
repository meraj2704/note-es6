const numbers = [2,4,6,8];
const output = [];
for(const number of numbers)
{
    const double = number *2;
    output.push(double);
}
console.log(output);
function getdoubles (numbers )
{
    const output2 = [];
    for(const number2 of numbers)
    {
        const double = number2 * 3;
        output2.push(double);
    }
    return output2;
}
const makeitMultiplier = num => num * 4;
const makeMul = numbers.map(makeitMultiplier);
const makeMul2 = numbers.map(x => x*5);
const result = getdoubles(numbers);
const sixthTimes = [1,2,3,4].map(x=> x *10);
console.log(result);
console.log(makeMul);
console.log(makeMul2);
console.log(sixthTimes);