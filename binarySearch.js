function search(arr, num){
    const arrlength = arr.length;
    return binarySearch(arr, 0, arrlength, num);
}

function binarySearch(arr, start, end, num) {
    const mid =  Math.floor ( ( start + end ) / 2 );
    const midItem = arr[mid];
    if( midItem === num) {
        return mid;
    }
    if( start === end ){
        return -1;
    }
    if (midItem > num){
        return binarySearch(arr, start, mid - 1, num);
    }
    return binarySearch(arr, mid + 1, end, num);

}

console.log(search([1, 2, 3], 0));