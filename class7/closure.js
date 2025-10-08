// //closure 
// function test(){
//     var msg = 'Hi I am learning scope and closure'

//     function sayMsg(){
//         console.log(msg)
//     }
//     sayMsg()
// }

// test()





//closure 
function test(){
    var msg = 'Hi I am learning scope and closure'

    return function(){
        console.log(msg)
    }
}

var sayMsg1 = test()
sayMsg1()