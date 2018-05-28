function reverseArray (arr, low, high) {
    while (low < high){
        let temp = arr[high];
        arr[high] = arr[low];
        arr[low] = temp;
        high--;
        low++
    }
    return arr;
}
function rotateArray ( arr, by){
    
    reverseArray(arr, 0, arr.length - 1);
    reverseArray(arr, 0, by - 1);
    reverseArray(arr, by, arr.length - 1);
    return arr;
}

console.log(rotateArray([1,2,3], 1));