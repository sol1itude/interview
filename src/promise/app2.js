// promise.all的用法
const fs = require('fs');
const { resolve } = require('path');

function readFile(path, isError){
    return new Promise( (resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err || isError){
                reject('承诺失败')
            }

            const resData = JSON.parse(data);

            resolve(resData)
        })
    })
}

// readFile('./data/user.json')
//     .then( res => {
//         console.log(res);
//     });

// readFile('./data/course.json')
//     .then( res => {
//         console.log(res);
//     });

// readFile('./data/userCourse.json')
//     .then( res => {
//         console.log(res);
//     });


//Promise.all([1, true, '123']).then( res => console.log(res)); //[1, true, '123'];

// promise.all  用多个异步任务并发运行，他的结果创建承诺之后使用，等待所有任务结果的完成
// interable内部元素传递的事promise对象集合，如果不是promise，就直接resolve。
// interable内部没有元素，返回空数组。

Promise.all([
    readFile('./data/user.json'),
    readFile('./data/course.json'),
    readFile('./data/userCourse.json')
])
.then( res => {
    console.log(res);
})

// 有一个promise为reject,示例会掉rejected
// 失败的原因是第一个失败的promise的结果
Promise.all([
    readFile('./data/user.json'),
    readFile('./data/course.json', true),
    readFile('./data/userCourse.json')
])

.catch( err => {
    console.log(err);
})