import data from './data.json'

function fn(){
    console.log(1);
}
fn();
console.log(data);


// 开发环境下打包
// webpack ./src/index.js -o ./src/dist/bundle.js --mode=development..

// 生产环境下打包   注释没有了，代码混淆和代码压缩
// webpack ./src/index.js -o ./src/dist/bundle_prod.js --mode=production