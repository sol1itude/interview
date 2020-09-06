promise 承诺 

resolve 解决问题
reject 拒绝考虑承诺
pending 等待结果

pending -> resolve
pending -> reject



解决异步流程化的一种手段

Promise 是一个构造函数 是需要new
有且只有一个参数 excutor 执行器
+ excutor 执行器 new Promise时调用  同步执行
  - resolve 函数
  - reject 函数

then 异步执行



``` javascript

    let promise = new Promise((resolve, reject) => {
        console.log(1)
    })

```

then 异步调用
