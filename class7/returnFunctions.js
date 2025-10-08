// function greet(msg){
//     function greetings(name){
//         return msg + ', ' + name + '! '
//     }
//     return greetings
// }
// var gm = greet('good morning')
// var gn = greet('good night')
// var hello = greet('Hello')
// // console.log(typeof gm)
// var msg = gm('MD.KAZI ROKY')
// console.log(gn('twinkle cats'))
// console.log(gn('Jamal uddin'))

// console.log(msg)


// function base(b){
//     function power(n){
//         var result = 1
//         for(var i=0;i<b; i++){
//             result*=n
//         }
//         return result
//     }
//     return power
// }




function base(b){
    return function(n){
        var result = 1
        for(var i=0;i<b; i++){
            result*=n
        }
        return result
    }
}

var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(5))






