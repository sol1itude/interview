let x = 1;
function A(y) {
    let x = 2;
    function B(z){
        console.log(x+y+z);
    }
    return B
};
let C = A(2);
C(3);//7

ECStack = [];