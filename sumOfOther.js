function sumOfOther(arr){
    const tempArr = [];
    const arrLength = arr.length;

    for(let i = 0; i<arrLength; i++){
        let sum = 0;
        for(let j = 0; j<arrLength; j++){
            if(arr[j] === arr[i]){
                continue;
            }
            sum +=arr[j];
        }
        tempArr.push(sum);
    }

    return tempArr;
}