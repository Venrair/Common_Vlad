
'Adding Element' 'ДОБАВИТЬ элемент в список'

const numbers = [3, 4];


//добавить элемент в конец списка END
numbers.push(5, 6)

//добавить элемент в начало списка BEGIN
numbers.unshift(1, 2);

//добавить элемент в середину списка MIDDLE
numbers.splice(2, 0, 'a', 'b');  // в скобках 2 это индекс элемента после которого надо добавить, 0 чисто элементов которые надо удалить, потом то что хотим добавить

console.log(numbers);


'Finding Element' 'НАЙТИ элемент в списке'

'Primitives'

const numbers1 = [1, 2, 3, 4, 1];

console.log(numbers1.indexOf('a')); // = -1, значит такой элемент в списке не найден
console.log(numbers1.indexOf(1)); // = 0, нашло 1 в списке и отобразило его индекс в этом списке (первый)
console.log(numbers1.indexOf(1, 2)); // =4, поиск 1 в списке начиная с индекс 2, поэтому пропускаетстя первая единица(индекс 0) и выдается следующая
console.log(numbers1.lastIndexOf(1)); // = 4, единица в списке два раза, и её последнее местоположение это позиция 4
console.log(numbers1.includes(1)); // = true, проверяет есть ли такой элемент в списке

'References'

const listOfcources = [
    {
      id: 1, 
      name: 'a'
    },
    {
     id: 2, 
     name: 'b'
    }, 
];

const searchResult = listOfcources.find(function(cource){
    return cource.name === 'a';
    }
);


console.log(searchResult); //возвращает первый подходящий по критериям поиска обьект = { id: 1, name: 'a' }
/////////////////////////////
'можно сделать проще используя ARROW FUNCTION'
const searchResult3 = listOfcources.find(cource => cource.name === 'a');
//////////////////////////////////////////////////////////////


const searchResult1 = listOfcources.findIndex(function(cource){
    return cource.name === 'a';
    }
);

console.log(searchResult1); //=0 возвращает индекс обьекта в списке подходящий по критериям поиска обьект
 


'Removing Elements' 'УДАЛИТЬ элемент из списка'

const numbers2 = [1, 2, 3, 4];

const last = numbers2.pop(); //удаляет последний элемент в списке и возвращает его LAST
console.log(numbers2); // = [ 1, 2, 3 ]
console.log(last); // = 4

const first = numbers2.shift(); //удаляет первый элемент в списке и возвращает его FIRST
console.log(numbers2); // = [ 2, 3, 4 ]
console.log(first); // = 1

const middle = numbers2.splice(2, 1); // 2 это индекс с которого начать удаление, 1 количество элементов которые надо удалить MIDDLE
console.log(numbers2); // = [ 1, 2, 4 ]


'Emptying an Array' 'УДАЛИТЬ ВСЁ из списка, очистить список'

const numbers3 = [1, 2, 3, 4];

numbers3.length = 0;

console.log(numbers3); // = []



'Combining and Slicing Arrays' 'ОБЬЕДЕНИТЬ списки, вырезать кусок из списка'

const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];

//Combining using concat
const combined = arrOne.concat(arrTwo);
console.log(combined);   // = [ 1, 2, 3, 4, 5, 6 ]

//Slicing using slice (1й - взять отрезок)
const slice = combined.slice(2, 4);  //безем переменную в которой лежит обьединенные списки, 3 индекс С которого наинается 4 ПЕРЕД каким заканчивается = [ 3, 4 ]
console.log(slice);

//Slicing using slice (2й - от и до конца)

const slice2 = combined.slice(2);  //безем переменную в которой лежит обьединенные списки, 3 индекс С которого наинается 4 ПЕРЕД каким заканчивается = [ 3, 4 ]
console.log(slice2); // = [ 3, 4, 5, 6 ]


'The Spread Operator'  'ОБЬЕДЕНИТЬ списки'

const arrOne1 = [1, 2, 3];
const arrTwo1 = [4, 5, 6];

//Combining using Spread
const spread1 = [...arrOne1, ...arrTwo1]
console.log(spread1);
//можно что то попутно добавить в процессе обьеденения
const spread2 = [...arrOne1, 'a', ...arrTwo1, 'b']
console.log(spread2);

//можно создать копию списка
const newSpread = [...spread2]; 
console.log(newSpread);



'Iterating an Array' 'ПЕРЕБРАТЬ список используя FOREACH'

const listOfNumbers = [1, 2, 3];

for (let number of listOfNumbers)
console.log(number);

//FOR EACH
const listOfNumbers1 = [1, 2, 3];

listOfNumbers1.forEach(function(someNumber){
    console.log(someNumber);
});

///or using ARROW function
listOfNumbers1.forEach(n => console.log(n));


//что бы перед числом изобразить его индекс можно использовать несколько параметров
const listOfNumbers3 = [1, 2, 3];

listOfNumbers3.forEach((anotherNumber, index) => console.log(index, anotherNumber)); 
/////////////////////////////////////////


'JOIN'   'ОБЬЕДЕНИТЬ'

const numbers4 = [1, 2, 3]

const joined = numbers4.join(' and '); //обеденяются все значения с списке, можно добавить что-то, что будет прописано между ними (в данном случае and)

console.log(joined); // = 1 and 2 and 3 
console.log(typeof(joined)); //=string, после Join получаетс стринга


'SORTING' 'СОРТИРОВКА'

const numbers5 = [2, 3, 1];
numbers5.sort();
console.log(numbers5); // = [ 1, 2, 3 ]

//reverse - выводит содержимове списка в обратном порядке

const numbers6 = [11, 200, 432, 35];
numbers6.reverse();
console.log(numbers6); // = [ 35, 432, 200, 11 ]

//сортировка обьектов в списке

const cources = [
    {
        id : 1,
        title : 'ANode.js'
    },
    {
        id : 2,
        title: 'zjavaScript'
    }
];

cources.sort((a, b) => {

    const titleA = a.title.toLocaleLowerCase();
    const titleB = b.title.toLocaleLowerCase();

    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
});
console.log(cources);


'Testing the Elements of an Array. EVERY , SOME' 'ПРОВЕРКА элементов в списке'
//every проверяет что ВСЕ элементы списка отвечают заданным критериям (к примеру позитивные)
//some проверяет что хотя бы один элемент в списке отвечают заданным критериям (к примеру позитивный)

const numbers7 = [1, 2, 3]

const allPositive = numbers7.every(value =>{
    return value >=0;
});
console.log(allPositive);



const numbers8 = [1, 2, 3]

const atLeastOnePositive = numbers8.some(anything => {
    return anything >=0;
});
console.log(atLeastOnePositive);





'Filtering Array' 'ФИЛЬТРАЦИЯ'

const numbers9 = [-7, 1, 2, 3];

const filteredArray = numbers9.filter(valueB => {
    return valueB >= 0;
});

console.log(filteredArray);





'Mapping Array'
//можно замапить каждый элемент в списке с чем то другим

const numbers10 = [1, -1, 2, 3];
const filteredArray2 = numbers10.filter(n => n >= 0); //сначала выкинуть из списка негативные числа
const items = filteredArray2.map(n2 => '<li>' + n2 + '</li>'); // смапить с чем то = [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
const html = items.join(''); // = <li>1</li><li>2</li><li>3</li>      получилась стринга (если не добавить пустоту '' то по дефолту будет разделение запятой)

///////////////////
'мапить с обьектами'
const numbers11 = [11, -1, 22, 33]; 
const filteredArray3 = numbers11.filter(n => n >= 0); //сначала выкинуть из списка негативные числа
const items1 = filteredArray3.map(n22 => ({age : n22})); // потом мапим с обьектом ({age : n22}) =    [ { age: 11 }, { age: 22 }, { age: 33 } ]

console.log(items1);
///////////////////
'можно собирать в цепочку CHAINING' 

const numbers12 = [11, -1, 22, 33]; 

const item2 = numbers12
 .filter(n => n >= 0)
 .map(n22 => ({age : n22}))
 .filter(obj => obj.age > 11); // [ { age: 22 }, { age: 33 } ]

console.log(item2);


'Reducing an Array - СЛОЖЕНИЕ всех значений в строке'

const numbers13 = [100, 200, 300, 400]; 

const sum = numbers13.reduce((accum, curentValue) => {           //accum собирает в себя(поэтому он 0 что бы посчиталось верно)
    return accum + curentValue;
}, 0); // 0 означает изначальное число если указать 13 то сумма будет 1013

console.log(sum); // 1000

// accum = 0
// пошел цикл и curentValue взял первое значение из списка (100) и прибавил его к accum = 0 + 100
// после первой итерации accum = 100, curentValue берет след значение из списка (200) и прибавляет его к accum, получается что accum = 300
//////////////////////////////////////
'можно укоротить и не назначать accum начальное значение, в таком случае оно примет значение 1го значния в списке И curentValue возьмет УЖЕ второе значение'
const numbers14 = [100, 200, 300, 400]; 
const sum2 = numbers14.reduce((accum, curentValue) => accum + curentValue);

console.log(sum2);






