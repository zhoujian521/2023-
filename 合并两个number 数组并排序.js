const arr = [0, 1, 2, 2, 2, 5, 5, 100];

const arr1 = [1, 2, 2, 100, 5]
const arr2 = [0, 5, 5, 1, 2, 2, 2]

function merge(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    let result = [];
    arr1 = arr1.sort((a, b) => a - b)
    arr2 = arr2.sort((a, b) => a - b)
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] === arr2[index2]) {
            result.push(arr1[index1]);
            index1++;
            index2++;
        } else if (arr1[index1] < arr2[index2]) {
            result.push(arr1[index1]);
            index1++;
        } else if (arr1[index1] > arr2[index2]) {
            result.push(arr2[index2]);
            index2++;
        }
    }
    return result = [...result, ...arr1.slice(index1, arr1.length), ...arr2.slice(index2, arr2.length)]
}

console.log('=============merge=======================');
console.log(merge(arr1, arr2));
console.log('=============merge=======================');