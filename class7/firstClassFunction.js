function add(a,b){
    return a+b
}
var sum = add
console.log(sum(2,3))



var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](2,5))


var obj ={
    sum:add
}
console.log(obj)
console.log(obj.sum(4,6))




setTimeout(function(){
    console.log('I love Khulna')
},3000)