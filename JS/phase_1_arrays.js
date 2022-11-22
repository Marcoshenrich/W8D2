Array.prototype.unique = function() {
    let new_arr = []
    this.forEach( (el)=> { 
         
        if (!new_arr.includes(el)) {
            new_arr.push(el)
        }
    } )

    return new_arr
}

Array.prototype.twoSum = function() {
    let new_arr = []
    i = 0
    this.forEach( (num1) => { 
        j = 0
        this.forEach((num2) => {
            if (num1 + num2 === 0 && j > i) {
                new_arr.push([num1, num2])
            }
            j++
        })
        i++
    } )
    return new_arr
}

Array.prototype.transpose = function() {
    let new_arr = []
    i = 0
    this.forEach((num1) => {
        j = 0
        this.forEach((num2) => {
            new_arr.push(this[j][i])
            j++
        })
        i++
    })
    return new_arr

}

arr =
[
[1,2,3],
[4,5,6],
[7,8,9]
]

[
[1, 4, 7],
[2, 5, 8],
[3, 6, 9]
]


