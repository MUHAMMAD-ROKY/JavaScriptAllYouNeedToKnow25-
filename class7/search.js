var arr = [1,5,16,9,10,15,18,20]
var find = 11
var isFound = false
for(var i = 0; i<arr.length;i++){
    if(arr[i]==find){
        console.log('Data found index'+' '+i)
        isFound =true
        break;
    }
}
if(!isFound){
    console.log('Data not found')
}