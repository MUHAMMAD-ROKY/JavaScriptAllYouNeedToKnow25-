//while loop
/*
var i = 0
while(i<10){
    console.log('Hm Kamal')
    i++
}
*/

var isRunning = true

while(isRunning){
    var rand = Math.floor(Math.random()*10+1)
    if(rand==9){
        console.log("Yah i got a car")
        isRunning = false
    }
    else{
        console.log("you have got"+' '+ rand +' '+'please try again')
    }

} 