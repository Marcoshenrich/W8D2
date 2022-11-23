Array.prototype.bubbleSort = function() {
    let sorted = false
    while (sorted === false) {
        sorted = true
        for (let i = 0; i < this.length - 1; i++) {
                j = i + 1
            if (this[j] < this[i]) {
                    [this[j], this[i]] = [this[i], this[j]]
                    sorted = false
                }
            }
        }
    return this
}

// "hello".slice(0, 4)
// 'hell'

String.prototype.subStrings = function() {
    newArr = []
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length + 1; j++) {
             if (j > i) {
                newArr.push(this.slice(i, j))
             }
        }
    }
    return newArr
}