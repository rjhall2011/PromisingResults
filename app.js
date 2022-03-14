//  slowMath.add(1, 1).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 2);
// }).then(num => {
//     console.log(num);
//     return slowMath.divide(num, 4);
// }).then(num => {
//     console.log(num);
//     return slowMath.subtract(num, 3);
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 98);
// }).then(num => {
//     console.log(num);
//     return slowMath.remainder(num, 2);
// }).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 50);
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 32);
// }).then(num => {
//     console.log(`The final result is ${num}.`)
// }).catch(err => {
//     console.log(err);
// });

async function doMath() {
    try { 
        let result = await slowMath.add(6, 2);
        console.log(result);
        result = await slowMath.multiply(result, 2);
        console.log(result);
        result = await slowMath.divide(result, 4);
        console.log(result);
        result = await slowMath.subtract(result, 3);
        console.log(result);
        result = await slowMath.add(result, 98);
        console.log(result);
        result = await slowMath.remainder(result, 2);
        console.log(result);
        result = await slowMath.multiply(result, 50);
        console.log(result);
        result = await slowMath.add(result, 32);
        console.log(result);

    } catch (error) {
        console.log(error);
    }
    


}

doMath();
