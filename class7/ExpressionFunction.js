var addition = function(a,b){
    return a+b
}

addition(40,60)

setTimeout(function(){
    console.log("I will buy a car")   //asynchronous
},3000)

var another  = addition
console.log(another(7,8))
