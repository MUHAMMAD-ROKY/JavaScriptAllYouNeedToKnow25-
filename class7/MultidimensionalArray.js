/*
    //2D array
    var arr = [
        [],
        [],
        []
    ]
*/


/*
    //3D array
    var arr = [
        [
            [],
            [],
            []
        ],
        [
            [],
            [],
            []
        ],
        [
            [],
            [],
            []
        ]
    ]
*/




//2D array
var arr = [
    [10,20,30,40,50],
    [12,13,14,15,16],
    [21,22,23,24,25]
]

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])


// console.log(arr[0][0])
// console.log(arr[0][1])
// console.log(arr[0][2])
// console.log(arr[0][3])
// console.log(arr[0][4])

for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr[i].length; j++){
        console.log('Element'+i +' '+arr[i][j])
    }
}