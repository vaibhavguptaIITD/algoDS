function moveZerosToLeft(arr){
    var read = arr.length - 1,
    write = arr.length - 1;
    while(read !== -1){
        var item = arr[read];
        if(item !== 0){
            arr[write] = item;
            write--;
        }
        read--;
    }
    while(write !== -1){
        arr[write] = 0;
        write--;
    }
    console.log(arr);
}

moveZerosToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0]);