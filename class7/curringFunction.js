// //normal function 
// function add(a,b,c){
//     return a+b+c
// }
// var result1 = add(5,5,20)
// console.log(result1)


//write a curring function
function curring(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
var result2 = curring(5)(5)(20)
console.log(result2)