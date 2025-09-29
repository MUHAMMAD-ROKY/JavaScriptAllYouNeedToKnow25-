// var arr =[4,5,1,6,40]

// for(var i = 0; i<arr.length; i++){
//     arr[i] =arr[i]+2
// }
// console.log(arr)





var arr =[4,5,1,6,40]

var sum = 0
for(var i = 0; i<arr.length; i++){
    sum +=arr[i]
}
console.log(sum)

for(var i=0; i<arr.length;i++){
    if(arr[i]%2==0){
        console.log('Even')
    }
}