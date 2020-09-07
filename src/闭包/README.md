JS中的数据类型
- 基本数据类型
    + number
    + string
    + boolean
    + null
    + undefined
    + symbol
    + bigint
- 引用数据类型
    + object
        + 普通对象
        + 数组对象
        + 正则对象
        + 日期对象
        + Math数学函数对象
    + function


数据类型监测
- typeof 监测数据类型的逻辑运算符
- instanceof 监测是否为某个类的示例
- constructor 监测构造函数
- Object.prototype.toString.call 监测数据类型

typeof [value] 返回当前值得数据类型 "数据类型"
- 返回的结果都是字符串
- 局限性
    + typeof null => "object"
    + typeof 不能细分对象类型（监测普通对象或者数组对象都是"object"）

- 把其他数据类型转化为数字的方法
    + 强转换（基于底层机制转换）
        + Number(value)
        + 隐式转换
    + 弱转换（基于一些额外的方法转换）
        + parseInt(value)//不能识别小数点
        + parseFloat(value)//可以识别小数点



JS之所以能在浏览器中运行，是因为浏览器给JS提供了执行环境（栈内存）


- GO：全局对象
- ECStack：执行环境栈
- EC：执行上下文
    + VO 变量对象
    + AO 活动对象
- Scope：作用域，创建函数的时候赋予的
- Scoped Chain：作用域链