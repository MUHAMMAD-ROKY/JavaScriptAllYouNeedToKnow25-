//private 

var rectangle = function (width,height){

    var name = 'jamal khan'

    this.width = width
    this.height = height

    var position ={
        x:60,
        y:-100
    }
    var printProperties = function(){
        console.log('my width is:' +this.width)
        console.log('my height is:' +this.height)
    }.bind(this)
    this.draw = function(){
        console.log('I am rectangle')
        printProperties()
        console.log('position x:'+ position.x + 'position y:' + position.y)
    }


    // this.getPosition = function (){
    //     return position
    // }

    Object.defineProperty(this,'position',{
        get:function(){
            return position
        },
        set:function(value){
            position = value
        }
    })
    
}

var rect = new rectangle(10,20)

rect.position ={
    x:456,
    y:123
}


rect.draw()
console.log(rect.getPosition())
