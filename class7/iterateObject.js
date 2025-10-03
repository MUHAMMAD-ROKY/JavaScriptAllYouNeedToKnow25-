var obj1={
    a:10,
    b:20
}
// console.log('a' in obj1)
// console.log('c' in obj1)
for(var i in obj1){
    console.log(i)
    console.log(i + ' '+obj1[i])
}