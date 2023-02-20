function hasDuplicate(arr){
    return (new Set(arr).size!== arr.length)
}

console.log('Array Has Duplicate :>> ', hasDuplicate([1,5,-1,4,-4]));