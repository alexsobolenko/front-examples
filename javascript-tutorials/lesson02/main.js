// Примитивные и объектные данные. Обертки

// примитивы
let srt = 'Hulk Hogan';
let num1 = 11;
let num2 = 3.14;
let bool = true;
let undef;
let nul = null;

// объектные
let obj = {
    prop: 'yo',
    fun: () => {
        console.log('function in object');
    },
};
let regexp = /baba/g;
let func = () => {};
let arr = [1, 2, 3];

obj.prop = 'blabla';
arr[2] = 24;

// обертки
let str2 = new String('обёртка');

let num3 = Number('123');
num3.prop = 'xxx';
let num4 = new Number('123');
num4.prop = 'xxx';
console.log(num3);
console.log(typeof num3.toString());
console.log(typeof num3);
console.log(num4);
console.log(typeof num4.toString());
console.log(typeof num4);
