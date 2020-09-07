// async await
const fetch = require('node-fetch');

function getData(){
    return fetch('http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true')
        .then( res => {
            return res.json()
        })
        .then( res => {
            return res
        })
        .catch( err => {
            return err
        })
}

async function logData(){
    const data = await getData();
    console.log(data);
}

logData()

// async是异步的

// await 是一个操作符 等待一个Promise对象产出结果的操作手段；    
// 功能是暂停async函数的执行，等待Promise处理后的结果；
// 假如Promise的处理结果是rejected，会抛出异常；
// async 函数是通过一个隐式的Promise返回pending状态。