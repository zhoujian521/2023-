// list ==>  tree
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

// function convert(list, parentId) {
//     const res = [];
//     const map = list.reduce((res, v) => (res[v.id] = v, res), {})
//         // const map = list.map((v) => {
//         //     return {
//         //         [v.id]: v
//         //     }
//         // })
//     for (const item of list) {
//         // 取出根节点 
//         if (item.parentId === 0) {
//             res.push(item)
//             continue
//         }
//         // 遍历塞进去
//         if (item.parentId in map) {
//             const parent = map[item.parentId]
//             parent.children = parent.children || []
//             parent.children.push(item)
//         }
//     }
//     return res
// }

// console.log('==========convert==========================');
// console.log(convert(list));
// console.log('==========convert==========================');




// // JS 快排   （小）中间数 （大）

const list = [1, 2, 3, 8, -4, -6, 5];

function quicksort(list) {
    // 校验 < 2 => [] [1] => 直接返回
    if (list.length < 2) {
        return list
    }
    let left = [];
    let right = [];
    const point = list[0];
    for (let i = 1; i < list.length; i++) {
        console.log('============quicksort========================');
        if (list[i] >= point) {
            right.push(list[i]);
        } else {
            left.push(list[i])
        }
    }

    return [...quicksort(left), point, ...quicksort(right)];
}

function bubbleSort(list) {
    console.log('===========bubbleSort=========================');
    let swapped = true;
    for (let i = 0; i < list.length; i++) {
        swapped = false;
        for (let j = 0; j < list.length - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j]
                list[j] = list[j + 1];
                list[j + 1] = temp
                swapped = true;
            }
        }
        if (!swapped) return list;
    }
    return list;
}


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


// var a = {
//     value: 0,
//     valueOf() {
//         return this.value++;
//     }
// };
// if (a == 1 && a == 2 && a == 3) {
//     console.log(1);
// }