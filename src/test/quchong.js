// 数组去重

/***
 * 方法一
 * 扩展运算符和Set结构相结合，就可以去除数组的重复成员
 */
let arr = [1,2,3,1,2,3,4];
console.log([...new Set(arr)]);//[1,2,3,4]

/**
 * 方法二
 * Array.form()能把set结构转换为数组
 */

 console.log(Array.from(new Set(arr)));//[1,2,3,4]

 /**
  * 方法三
  * ES5
  */

  function unique(arr) {
      let _temp = [];
      arr.forEach( e => {
          if(_temp.indexOf(e) === -1){
              _temp.push(e)
          }
      })

      return _temp
  };
  console.log(unique(arr));//[1,2,3,4]
