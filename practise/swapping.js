const arr = [1, 2, 3, 4, 5];

// let temp=arr[0]
// arr[0]=arr.length
// arr[arr.length-1]=temp

[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

console.log(arr);
