function range(start, end){
    if (start === end) {return [start]}
    arr = [start]
    return arr.concat(range(start+1, end))

}

function sumRec(arr){
    if (arr.length === 1){return arr[0]}


    return arr.shift() + sumRec(arr)
}

function exp(base,exponent){
    if (exponent === 0 ) {return 1}

    return base * exp(base, exponent-1)
}

function fibonacci(n){
    if (n ===1) {return [1]}
    if (n === 2) { return [1, 1]}

    fib1 = fibonacci(n-1)
    return fib1.concat([fib1[fib1.length - 1] + fib1[fib1.length - 2]])

}
// > fibonacci(3)
// [1, 1, 2]
//     > fibonacci(4)
//     [1, 1, 2, 3]
//     > fibonacci(5)
//     [1, 1, 3]

function deepDup(arr){
   if (arr[1] === undefined) {return arr}
   newArr = []

   newArr.push(arr.shift())
   return newArr.concat(deepDup(arr))
    

}