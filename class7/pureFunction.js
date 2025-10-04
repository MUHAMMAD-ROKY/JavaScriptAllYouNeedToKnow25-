//It is a pure function
function sqr(n){
    return n*n
}
console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))



//It is not pure function
var n = 10
function change(){
    n = 100
}
change()
console.log(n)


var Point ={
    x:40,
    y:50
}
function printPoint(Point){
    Point.x=100,
    Point.y=200
    console.log(Point)
}
printPoint(Point)

