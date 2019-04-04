var obj = {
    "a":1,
    fn(){
        console.log(this.a);
    }
}
obj.fn();


const arr = ["杨老总","前端领头人","北京","nice","嘿哈"];
arr.forEach(function(item,index){
    console.log(`${item}下标为${index}`);
})


const arr1 = ['a','b'];
const arr2 = ['c'];
const arr3 = ['d','e'];

// es5的合并数组
const arr5 = arr1.concat(arr2,arr3);

// es6的合并数组
const arr4 = [...arr2,...arr1,...arr3];
console.log(arr,arr4);