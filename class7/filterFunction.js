var arr =[4,2,5,8,3,6,7,9,11]

// var FilteredArray = arr.filter(function(value){
//     return value%2==0
// })
// console.log(FilteredArray)

function myFilter(arr,cb){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        if(cb(arr[i],i,arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter(arr,function(value){
    return value%2==0
}))
console.log(myFilter(arr,function(value){
    return value%2==1
}))