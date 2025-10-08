var arr = [1,2,3,4,5]
// var sum = arr.reduce(function(prev,curr){
//     return prev+curr
// },100)

// var max =arr.reduce(function(prev,curr){
//     return Math.max(prev,curr)
// },0)
// console.log(sum)
// console.log(max)


//callbackf = cb    acculator = acc

function myReduce(arr,cb,acc){
    for(var i=0; i<arr.length; i++){
        acc = cb(acc,arr[i])
    }
    return acc
}

var sum = myReduce(arr,function(pre,curr){
    return pre+curr
},0)

var max = myReduce(arr,function(pre,curr){
    return Math.max(pre,curr)
},0)

var min = myReduce(arr,function(pre,curr){
    return Math.min(pre,curr)
},arr[0])

console.log(sum)
console.log(max)
console.log(min)