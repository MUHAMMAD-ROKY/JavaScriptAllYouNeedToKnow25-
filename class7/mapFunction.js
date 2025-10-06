var arr = [1,2,3,4,5]

function myMap(arr,cb){
    var newArray = []
    for(var i=0; i<arr.length; i++){
        var temp = cb(arr[i],i,arr)
        newArray.push(temp)
    }
    return newArray
}

var qb = myMap(arr,function(value){
    return value*value*value
})

var mten =myMap(arr,function(value){
    return value*10
})

console.log(arr)
console.log(qb)
console.log(mten)