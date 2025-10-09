var rect ={
    width:100,
    height:50,

    draw:function(){
        console.log('I am ractangle')
        console.log('my width is:'+ this.width)
        console.log('my width is:'+ this.height)
    }
}
rect.draw()
rect.width = 200
rect.draw()