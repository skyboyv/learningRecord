/**
 * array基础api个人理解
 * @type {string[]}
 */

const array = ['a', 'b', 'c', 'a', 'e'];

/**
 * 根据下标复制数组内的值到指定下标，若复制多个，下标从制定位置依次往后递增
 *
 * target 复制到哪个下标
 * start  从哪个下标开始复制
 * end    从哪个下标结束  end省略 则默认从start复制到数组最后一个下标
 */
console.log(array.copyWithin(1, 4, 5));
console.log(array.copyWithin(1, 3));

/**
 * entries 返回数组的构造器
 * @type {IterableIterator<[number, string]>}
 * [ 0, 'a' ]
 [ 1, 'd' ]
 [ 2, 'e' ]
 [ 3, 'd' ]
 [ 4, 'e' ]
 */
const array1 = ['a', 'b', 'c', 'a', 'e'];
const iterator1 = array1.entries();
//依次从构造器中取出 下标和值 并返回新的数组
for (let i =0;i<array1.length ;i++){
    console.log(iterator1.next().value);
}

/**
 * 提取数组中符合条件的所有值,返回新的数组
 * @type {string[]}
 */
const array2= ['a', 'b', 'c', 'a', 'e'];
console.log(array2.filter(item => item === 'a')); //[ 'a', 'a' ]

/**
 *找到数组中第一个符合条件的值并返回该下标的值
 */
const array3= ['a', 'b', 'c', 'a', 'e'];
console.log(array3.find(item => item === 'a')); //a

/**
 * 找到数组中符合条件的值的下标并返回
 * @type {string[]}
 */
const array4= ['a', 'b', 'c', 'a', 'e'];
console.log(array4.findIndex(item => item === 'a')); //0
/**
 * 用一个固定值替换数组中自开始坐标之后的所有值
 * @type {string[]}
 */
const array5= ['a', 'b', 'c', 'a', 'e'];
console.log(array5.fill(1,2));//[ 'a', 'b', 1, 1, 1 ]

//在浏览器上可运行
const arr3 = [1, 2, [3, 4, [5, 6]]];
const newArray1 =arr3.flat(2); //[1, 2, 3, 4, 5, 6]
const newArray2 =arr3.flat(1); //[1, 2, 3, 4, [5,6]
console.log(newArray1);
console.log(newArray2);

