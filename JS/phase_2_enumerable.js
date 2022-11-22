Array.prototype.myEach = function(callback){
    for(let i= 0; i < this.length; i++){
        el = this[i] 
        callback(el)
    }
}


function callback(el){
    console.log(el)
}




Array.prototype.myMap = function (callback) {
    new_arr = []
    for (let i = 0; i < this.length; i++) {
        el = this[i]
        new_arr.push(callback(el))

    }
      return new_arr
}

function callback(el){
    return el * 2
}




Array.prototype.myReduce = function(callback,acc){
 
    acc ||= this.shift()

    this.forEach((el)=> acc = callback(acc, el))
    return acc

}



[1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}); 


[1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25); 