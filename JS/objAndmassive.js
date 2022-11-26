"use sctrict"

console.log(1);

//   0    1    2    3   5
const arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr[3])
arr[10] = 'wrong';
console.log(arr[10]);
console.log(arr);

const earth = {
    ocean: 5,
    country: 200,
    repoblic: {
        miniRepoblic: {
            main: {

            }
        }
    }
}

const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd'
}
const b = 'c';
arrObj.b = '12345';
arrObj['b'] = '12345';
arrObj['c'] = '12345';

console.log(arr[1]);
console.log(arrObj['c']);
console.log(arrObj.c);
// console.log(arr.0); wrong code


//  const arr = [a: 1, b: 2]

const user = {
    name: 'ilyas',
    age: 18,
}

console.log(user.age);