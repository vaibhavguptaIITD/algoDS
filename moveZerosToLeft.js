function moveZerosToLeft(arr){
    var zeros = countZeroes(arr);
    var newArr = [];
    for(var i = 0; i < zeros; i++){
        newArr[i] = 0;
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function countZeroes(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            count++;
        }
    }
    return count;
}

console.log(moveZerosToLeft([1,10,20,0,59,63,0,88,0]));