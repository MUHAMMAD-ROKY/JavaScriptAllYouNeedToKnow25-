// var obj ={
//     a:10,
//     b:20,
//     c:30
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))




// var obj ={
//     x:10,
//     y:20,
//     z:30
// }

// var obj2 = obj
// obj2.x = 40
// obj2.y = 50

// console.log(obj)
// console.log(obj2)




var obj ={
    x:10,
    y:20,
    z:30
}
var obj2 = Object.assign({},obj)
obj2.x=200
console.log(obj2)