//closure

var b = 10
function a(){
    var x=20
    return function(){
        console.log(x)
    }
}
var abc = a()
console.dir(abc)