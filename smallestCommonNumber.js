function smallestCommonNumber (arr1, arr2, arr3) {
    let i = 0, j = 0, k = 0;
    while(arr1[i] !== undefined && arr2[j] !== undefined && arr3[k] !== undefined) {
        if((arr1[i] === arr2[j]) && (arr2[j] === arr3[k])){
            return arr1[i];
        }
        let max = arr1[i];
        if(max < arr2[j]){
            max = arr2[j];
        }
        if(max < arr3[k]){
            max = arr3[k];
        }
        if(max !== arr1[i]){
            i++;
        }
        if(max !== arr2[j]){
            j++;
        }
        if(max !== arr3[k]){
            k++;
        }
    }
    return "no common number";
}

console.log(smallestCommonNumber([1,2,3], [2,3,4], [3,4,5]));