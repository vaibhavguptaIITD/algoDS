function findRotation(arr){
    return findRotationInIndex ( arr, 0, arr.length - 1);
}

function findRotationInIndex ( arr, low, high ){
    console.log("=========================================");
    console.log("low", low);
    console.log("high", high);
    if(arr[low] < arr[high]){
        return low;
    }
    if( low > high ){
        return low;
    }
    let mid = Math.floor ( (low + high) / 2 );
    console.log("mid" , mid);
    console.log("arr[mid]", arr[mid]);
    if(arr[mid] < arr[high]){
        return findRotationInIndex( arr, low, mid - 1);
    }
    return findRotationInIndex( arr, mid + 1, high);
}

console.log( findRotation ([176,
    188,
    199,
    200,
    210,
    222,
    1,
    10,
    20,
    47,
    59,
    63,
    75,
    88,
    99,
    107,
    120,
    133,
    155
    ]));