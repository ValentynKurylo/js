//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
/*
let a = [ 'a', 'b', 'c']
let str = ''
for (let i = 0; i < a.length; i++){
    str += a[i]
}
console.log(str);

 */

/////////////////////////////////////////////////////////////
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
/*
let a = [ 'a', 'b', 'c']
let str = ''
let i = 0;
while (i < a.length){
    str += a[i]
    i++
}
console.log(str);

 */
///////////////////////////////////////////////////////////////////////////////////////
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let a = [ 'a', 'b', 'c']
let str = ''
for(let item of a){
   str+= item
}
console.log(str);
