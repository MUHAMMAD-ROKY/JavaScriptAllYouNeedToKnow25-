var date = new Date()

var today = date.getDay()
switch(today){
    case 0:
        console.log("Today is Sunday")
        break
    case 1:
        console.log("Today is Monday")
        break
    case 3:
        console.log("Today is Twesday")
        break
    case 4:
        console.log("Today is Wednessday")
        break
    case 5:
        console.log("Today is Thuesday")
        break
    case 6:
        console.log("Today is Friday")
        break
    default : console.log("Not a Valid Number")
}