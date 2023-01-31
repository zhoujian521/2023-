/**
 * 合并两个number 数组并排序，并且取两个数组中相同数字最多的
 * 期望结果  [0,1,2,2,2,5,5,100]
 */
const arr1 = [1, 2, 2, 100, 5]
const arr2 = [0, 5, 5, 1, 2, 2, 2]

function mergeArr(arr1, arr2) {
    let index1 = 0
    let index2 = 0
    let result = []
    const array1 = arr1.sort((a, b) => a - b)
    const array2 = arr2.sort((a, b) => a - b)

    let i = 0
    while (index1 < array1.length && index2 < array2.length) {
        if (array1[index1] === array2[index2]) {
            result.push(array1[index1])
            index1++
            index2++
        } else if (array1[index1] < array2[index2]) {
            result.push(array1[index1])
            index1++
        } else if (array1[index1] > array2[index2]) {
            result.push(array2[index2])
            index2++
        }
        i++
    }
    result = [...result, ...array1.slice(index1, array1.length), ...array2.slice(index2, array2.length)]
    return result
}

/**
 * 实现 二叉树的深度优先遍历
 * https://blog.csdn.net/weixin_43252521/article/details/122276820
 */