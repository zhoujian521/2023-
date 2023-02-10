// const list = [
//     { id: 1, name: '部门 A', parentId: 0 },
//     { id: 2, name: '部门 B', parentId: 0 },
//     { id: 3, name: '部门 C', parentId: 1 },
//     { id: 4, name: '部门 D', parentId: 1 },
//     { id: 5, name: '部门 E', parentId: 2 },
//     { id: 6, name: '部门 F', parentId: 3 },
//     { id: 7, name: '部门 G', parentId: 2 },
//     { id: 8, name: '部门 H', parentId: 4 }
// ]


// function convert(list) {
//     const map = list.reduce((res, cur) => {
//         res[cur.id] = cur
//         return res
//     }, {});

//     for (const item of list) {
//         const { parentId: key = 0 } = item;
//         if (key in map) {
//             const parent = map[key];
//             parent.children = parent.children || []
//             parent.children.push(item)
//         }
//     }
//     return res;
// }

// console.log('===========list=========================');
// console.log(convert(list));
// console.log('===========list=========================');




// // JS 快排   （小）中间数 （大）

// const list = [1, 2, 3, 8, -4, -6, 1];

// function quicksort(list) {
//     // 校验 < 2 => [] [1] => 直接返回
//     if (list.length < 2) {
//         return list
//     }
//     let left = [];
//     let right = [];
//     const point = list[0];
//     for (let i = 1; i < list.length; i++) {
//         console.log('============quicksort========================');
//         if (list[i] >= point) {
//             right.push(list[i]);
//         } else {
//             left.push(list[i])
//         }
//     }

//     return [...quicksort(left), point, ...quicksort(right)];
// }

// function bubbleSort(list) {
//     let flag = 0;
//     for (let i = 0; i < list.length; i++) {
//         flag = 1
//         for (let j = i + 1; j < list.length - 1; j++) {
//             console.log('===========bubbleSort=========================');
//             if (list[i] > list[j]) {
//                 let temp = list[i]
//                 list[i] = list[j];
//                 list[j] = temp
//                 flag = 0;
//             }
//         }
//         if (flag === 1) return list;
//     }
//     return list

// }

// console.log('====================================');
// console.log(quicksort(list));
// console.log(bubbleSort(list));
// console.log('====================================');


// const str = 'abbaddab';


// function getMap(str) {
//     let map = {};
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         const key = str[i];
//         if (!map[key]) {
//             map[key] = 1
//         } else {
//             map[key] = map[key] + 1
//         }
//     }

//     let count = 0;
//     for (const key in map) {
//         newStr += `${key}:${map[key]}`
//         if (count < Object.keys(map).length - 1) {
//             newStr += ","
//         }
//         count++;
//     }


//     console.log('====================================');
//     console.log(newStr);
//     console.log('====================================');
// }

// console.log('====================================');
// console.log(getMap(str));
// console.log('====================================');


var a = {
    value: 0,
    valueOf() {
        return this.value++;
    }
};
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}