'use sctrict'

console.log(5 + 5);

console.log(5 + '5');

console.log(5 + +'5');

console.log('arr' + ' - object');




let incr = 10,
    decr = 10;

incr++; // postfix  
decr--; // postfix

++incr; // prefix   
--decr; // prefix

console.log(5 * 5);
console.log(incr++); // prefix means that, firstly paste and after add 1
console.log(decr--); // prefix means that, firstly paste and after add 1
console.log(5 / 5);
console.log(++incr); // postfix means that, firstly add 1 and after paste 
console.log(--decr); // postfix means that, firstly add 1 and after paste

console.log(5 & 2);


const name = 'text'; // присваивание
midname = 'Mirzaahmedov';

console.log(5 + 3 == 8); // '==' means equally(equally/равно)
console.log(5 + 3 == '8'); // '==' means equally
console.log(5 + 3 === '8'); // '===' strictly equal to(strictly/строго)
console.log(2 + 2 * 2 != 6); // '!=' not equally 
console.log(2 + 2 * 2 !== '6'); // '!==' not equally strictly equal to(strictly/строго)

const isClose = true,
    isChecked = false;

console.log(isChecked && isClose); // "&&" it is 'and'
console.log(isChecked || isClose); // "||" it is 'or'
console.log(isChecked && !isClose); // "!" it is 'not equally'

const math = [];
math[0] = 1 + 1;
math[1] = 5 - 5;
math[2] = 5 / 5;
math[3] = 5 * 5;
math[4] = '5';

console.log(math);
console.log(++math[1]);
console.log(--math[2]);
math[4] = math[4] + 'papa';
console.log(math[4]);