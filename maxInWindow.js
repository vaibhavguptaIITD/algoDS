function findMaxInWindow(arr, window) {
    for( let i = 0; i < arr.length - window + 1; i++) {
        console.log(findMax(arr, i, i+window));
    }
}

function findMax(arr, initial, final) {
    let max = arr[initial];
    for ( let i = initial + 1; i < final; i++) {
        max = max > arr[i] ? max: arr[i];
    }
    return max;
}

findMaxInWindow([-4, 2, -5, 3, 6], 1);