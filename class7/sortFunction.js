var persons =[
    {
        name:'A',
        age:24
    },
    {
        name:'B',
        age:19
    },
    {
        name:'C',
        age:26
    },
    {
        name:'D',
        age:21
    },
    {
        name:'E',
        age:28
    },
    {
        name:'F',
        age:20
    },
    
]


//var arr =[4,5,8,7,3,6,5,9,-4,-8,0,-2,8,1,3,5,6]
var arr =[4,5,8,7,3,6,5,9,4,8,0,2,8,1,3,5,6]
// arr.sort()
// console.log(arr)
//every()  provide + number    or   some()  provide -Number
//assending type of sorted funtion, if we cange a desending only change condition like return -1,1,0 then we can see change desending

arr.sort(function(a,b){
    if(a>b){
        return 1
    }
    else if(a<b){
        return -1
    }
    else{
        return 0
    }
})
console.log(arr)


persons.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{
        return 0
    }
})
console.log(persons)

var res1 = arr.every(function(value){
    return value%2==0
})
console.log(res1)
var res2 = arr.every(function(value){
    return value>=0
})
console.log(res2)

var res3 =arr.some(function(value){
    return value%2==1
})
console.log(res3)
var res4 =arr.some(function(value){
    return value<0
})
console.log(res4)