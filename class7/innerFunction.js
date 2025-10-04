/*
function somthing(greet,name){
    function sayHi(){
        console.log(greet,name)
    }
    sayHi()
}
somthing('Hello Good morning','MD kazi roky')
*/



function something(greet,name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
        else{
            return ''
        }
    }
    var message = greet+' '+getFirstName()
    console.log(message)
}

something('good morning','md kazi roky')
