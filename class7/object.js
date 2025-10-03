/*
var obj = {}
obj.x=10
console.log(obj)
*/







/* object literal

var obj = {
    x:20,
    y:50
}

//insert data of object
obj.z = 70

console.log(obj)

*/





/*object constructor
var obj1 = Object()
obj1.a=10
console.log(obj1)

var obj2 = new Object()
obj2.b=20
console.log(obj2)

*/






/*
var obj4 ={
    a1:657,
    b1:655,
    c1:660
}
console.log(obj4.a1)
console.log(obj4.b1 + obj4.c1)

console.log(obj4['a1'])
console.log(obj4['b1']+ obj4['c1'])

var show = 'a1'
console.log(obj4[show])
*/


/*
var obj4 ={
    a1:657,
    b1:655,
    c1:660
}
//update value a1
obj4.a1=700
console.log(obj4)

*/



var obj4 ={
    a1:657,
    b1:655,
    c1:660
}
//update value a1
//if no properties in object then get a new properties create
obj4.a1=700
obj4.d1=200
console.log(obj4)


obj4.a1 = undefined
console.log(obj4)

delete obj4.a1
console.log(obj4)
