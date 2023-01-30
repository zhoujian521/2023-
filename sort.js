const arr = [1, 2, 3, 5, 4];

function sort(arr) {
    const size = arr.length
    let flag = 0;
    for (let i = 0; i < size - 1; i++) {
        flag = 1;
        for (let j = 0; j < size - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
                flag = 0;
            }
        }
        if (flag) break
    }
    return arr;
}

console.log('====================================');
console.log(sort(arr, 5));
console.log('====================================');


function bubbleSort(a, size) {
    if (size == 1) return;
    let flag = 0;
    for (let i = 0; i < size - 1; i++) {
        flag = 1;

        for (let j = 0; j < size - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
                flag = 0;
            }
        }
        if (flag) break;
    }
    return a;
}

console.log('====================================');
console.log(bubbleSort(arr, 5));
console.log('====================================');