
//查找数组内是否存在某个元素，有则返回下标，无就返回-1
//方式一
const arr = ['a','b','c','d','e'];
const param = 'b';
const index = arr.findIndex(item => param === item);

console.log(index)


//方式二
const arr = ['a','b','c','d','e'];
const param = 'c';
let  index = -1;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === param){
        index =i;
    }
}
console.log(index);