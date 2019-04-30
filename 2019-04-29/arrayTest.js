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

/**
 *按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
 * 在浏览器上可运行
 * @type {*[]}
 * return 一个包含将数组与子数组中所有元素的新数组。
 */
// const arr3 = [1, 2, [3, 4, [5, 6]]];
// const newArray1 =arr3.flat(2); //[1, 2, 3, 4, 5, 6]
// const newArray2 =arr3.flat(1); //[1, 2, 3, 4, [5,6]
// console.log(newArray1);
// console.log(newArray2);

/**
 * flatMap
 *返回符合条件得新数组
 * 效率比map更快
 * @type {number[]}
 */
const arr1 = [1, 2, 3, 4];

console.log(arr1.map(x => [x * 2]));// [[2], [4], [6], [8]]
// arr1.flatMap(x => [x * 2]);// [2, 4, 6, 8]
// 只会将 flatMap 中的函数返回的数组 “压平” 一层
// arr1.flatMap(x => [[x * 2]]);// [[2], [4], [6], [8]]


const arr = [1,2,3,4,5,1,6,7,8,1,9,0];
console.log(arr.filter(item => item ===1));

console.log(Array.from('foo'));//[ 'f', 'o', 'o' ]
console.log(Array.of(1, 2, 3));//[ 1, 2, 3 ]

/**
 * unshift
 * 添加元素到数组开头
 */
arr.unshift('添加得开头元素');
console.log(arr); //[ '添加得开头元素', 1, 2, 3, 4, 5, 1, 6, 7, 8, 1, 9, 0 ]
/**
 * shift
 * 删除数组开头元素
 */
arr.shift('添加得开头元素');
console.log(arr); //[ 1, 2, 3, 4, 5, 1, 6, 7, 8, 1, 9, 0 ]
/**
 * splice
 * 有参数时，替换指定下标得元素，无参数时，删除指定下标得元素
 */
arr.splice(0,1,'123');
console.log(arr);//[ '123', 2, 3, 4, 5, 1, 6, 7, 8, 1, 9, 0 ]
arr.splice(0,1);
console.log(arr); //[ 2, 3, 4, 5, 1, 6, 7, 8, 1, 9, 0 ]
/**
 * toString
 * 将数组变为字符串,不去除逗号分隔符
 */
console.log(arr.toString());//1,2,3,4,5,1,6,7,8,1,9,0
/**
 * join
 * 将数组变为字符串,并去除逗号分隔符
 */
console.log(arr.join(''));//123451678190

/**
 * some
 * 测试是否至少有一个元素通过由提供的函数实现的测试。
 * 对于放在空数组上的任何条件，此方法返回false。
 */
const array7 = [1, 2, 3, 4, 5];

const even = function(element) {
    // checks whether an element is even
    return element % 2 === 0;
};

console.log(array7.some(even)); //true

/**
 * slice
 * 数组的浅拷贝
 * 拷贝数组中从开始下标到结束下标得值，并返回新数组，不包含结束下标得值
 */
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2,3));//[ 'camel' ]
/**
 * reverse
 * 倒置原数组并改变原数组
 */
const reverseAnimals =animals.reverse();
console.log(reverseAnimals);//[ 'elephant', 'duck', 'camel', 'bison', 'ant' ]
console.log(animals);//[ 'elephant', 'duck', 'camel', 'bison', 'ant' ]

/**
 * concat
 * 合并两个数组
 */
console.log([0,1,2].concat([3,4,5]));//[ 0, 1, 2, 3, 4, 5 ]

/**
 * pop
 * 删除最后一个元素，并改变原数组
 * @type {string[]}
 */
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
/**
 * map
 * 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
 * @type {number[]}
 */
var array8 = [1, 4, 9, 16];
// pass a function to map
const map1 = array8.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]