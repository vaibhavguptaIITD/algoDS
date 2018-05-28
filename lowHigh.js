function findLowHigh(arr, key){
    return findLowHighInRange( arr, 0, arr.length - 1, key);
}

function findLowHighInRange( arr, low, high, key){
    let _low = -1, _high = -1;
    if(low > high){
        return -1;
    }
    let mid = Math.floor ((high + low) / 2);
    if(arr[mid] === key ){
        let result1 = findLowHighInRange(arr, low, mid - 1, key);
        _low = result1 === -1 ? mid : result1[0];
        let result2 = findLowHighInRange(arr, mid + 1, high, key);
        _high = result2 === -1 ? mid : result2[1];
        return [_low, _high];
    }
    if(arr[mid] < key) {
        return findLowHighInRange(arr, mid + 1, high, key);
    }
    return findLowHighInRange(arr, low, mid - 1, key);
}

console.log(findLowHigh([1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10], 5));