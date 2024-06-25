
-For
-While
-Do...while
-For...in
-For...of


'FOR'

for (let i = 0; i < 5; i++)
{
  console.log('VR', i);
} 

//состоит из 3х частей: 
//1-variable (i (index) = loop variable); 
//2-condition (луп ранается пока кондишен=true), т.е пока i меньше 5 луп ранается
//3-шаг на который увеличивается или уменьшается


'While'

let i = 0;
while (i <= 5){                         //() тут кондишен, пока он True выполняются действия ниже
    if (i % 2 !== 0) console.log(i);
    i++;
}

'Do...While'
//крайне схожа с while но в отличии от while этот как минимум один цикл проходит
let i = 0;
do {                         
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

'Infinite Loop'

let i = 0;
while (i > 0)
console.log(i);
//учитывая что тут нет инкремента ++ i с каждым прогоном остается равно 0 и цикл гоняется вечно


'For in' //good for objects

const person = {
    name: 'vlad',
    age: 37
}

for (let key in person) //с каждым циклом key будет принимать имя пропрети из обьекта
console.log(key); 

//что бы вывести и проперти и значение проперти надо юзать Bracket Notation

for (let key in person)
console.log(key, person[key]); 

//array

const colors = ['red', 'blue', 'green'];
for (let index in colors)
console.log(index, colors[index]);


'For of' //good for Array

const colors = ['red', 'blue', 'green'];
for (let color of colors)
console.log(color);


'Break'

let i = 0;
while (i <=10){
    if (i === 5) break;  //вводится условие и брэйк, увидив что i=5 цикл прервется
    console.log(i); 
    i++;
} 

'Continue'

let i = 0;
while (i <=10){
    if (i % 2 === 0) {
        i++;
        continue;   //видя continue js переходит в начало лупа (while)
    } 
 
    console.log(i); 
    i++;
} 