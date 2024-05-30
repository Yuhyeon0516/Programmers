function solution(arr1, arr2) {
    var sumArr1 = 0;
    var sumArr2 = 0;
    
    if (arr1.length > arr2.length) {
        return 1;
    } else if (arr1.length < arr2.length) {
        return -1;
    }
    
    for (let i = 0; i < arr1.length; i++) {
        sumArr1 += arr1[i];
        sumArr2 += arr2[i];
    }
    
    return sumArr1 > sumArr2 ? 1 : sumArr1 < sumArr2 ? -1 : 0;
}