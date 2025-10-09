// function myFun(){
//     console.log(this)
// }
// myFun()






// function myFun(){
//     console.log(this)
// }
// new myFun()




// var rect ={
//     width:100,
//     height:50,

//     draw:function(){
//         console.log('I am ractangle')
//         this.printProperties()
//     },
//     printProperties:function(){
//         console.log('my width is:'+ this.width)
//         console.log('my width is:'+ this.height)
//     }
// }



// ///called this pattern is factory pattern
// var createRect = function(width,height){
//     return {
//         width:width,
//         height:height,

//         draw:function(){
//             console.log('I am ractangle')
//             this.printProperties()
//         },
//         printProperties:function(){
//             console.log('my width is:'+ this.width)
//             console.log('my width is:'+ this.height)
//         }
//     }
// }

// var rect1 = createRect(40,50)
// rect1.draw()
// var rect2 = createRect(20,30)
// rect2.draw()






///constructor
var Rectangle = function(width,height){
    this.width=width
    this.height=height

    this.draw=function(){
        console.log('I am ractangle')
        this.printProperties()
    }
    this.printProperties=function(){
        console.log('my width is:'+ this.width)
        console.log('my width is:'+ this.height)
    }
}

var rect3 = new Rectangle(10,8)
rect3.draw()





