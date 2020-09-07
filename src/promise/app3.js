// promise.race
// 和promise.all不同的是 谁先完成就先返回那个promise的结果，无论是resolve还是reject
// 应用场景：测试接口或者资源的请求响应时间。
const fs = require('fs');

function readFile(path, isError){
    return new Promise( (resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if(err || isError){
                reject('失败了！！！')
            }

            const resData = JSON.parse(data);

            resolve(resData);
        })
    })
};

Promise.race([
    readFile('./data/user.json'),
    readFile('./data/course.json', true),
    readFile('./data/userCourse.json')
])
.then( res => {
    console.log(res);
})
.catch( err => {
    console.log(err);
})

 