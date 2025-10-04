/*
function add(a,b){
    var result = a+b
    console.log(result)
}
add(10,20)
add(7,3)
*/




/*
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [7,8,9]

function sumOfArray(arr){
    var sum = 0
    for(var i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}
sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)

*/




function test(){
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i])
    }
}
test(10,20,30)


function addAll(){
    var sum = 0
    for(var i=0; i<arguments.length; i++){
        sum +=arguments[i]
    }
    console.log(sum)
}
addAll(20,40)
addAll(12,30,50,60,100)