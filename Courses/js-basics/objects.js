
//может быть как let так и const

// структура

// {{тип переменной}} {{название обьекта}} = 
// {
// {{название ключа}} : {{значение}},
// {{название ключа}} : {{значение}}
// }


//Object oriented programming (OOP)
//софтина это сборник обьектов которые общаются между собой что бы выполнить функциональность
//в ООП если ФУНКЦИЯ ЯВЛЯЕТСЯ ЧАСТЬЮ ОБЬЕКТА то эта функия называется МЕТОД


const circule = {
    radius : 1,
    location : {
        x : 1,
        y : 2
    },
    draw : function()                 //функция внутри обьекта (метод)
    {
        console.log('Xbox');
    }

};

circule.draw() // вызывается draw метод обьекта circule\


'Factory Function' //созадет обьекты
// использует return что бы создавать обьект

function createCircle(radius){        //радиус передается как параметр что бы вызывая эту функию она могла создавать ообьект с разными параметрами радиуса
    return {
        radius : radius,             //если вэлью и ключ одинаковые то можно упростить код {{radius : radius,}} = {{radius,}}
        draw()                       //если функция внутри обьекта то 'function' кейворд можно не писать
        {                            //то что в фиолетовых скобках это обьект, и вызывая функцию мы получим обьект 
            console.log('Xbox');
        }
    };
}


const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);




//лучше юзать предыдущую что бы не иипать себе голову
'Constructor Function'  //использовать Pascal для имени функции //созадет обьекты

function Circle(radius){
this.radius = radius;        //добавление проперти к пустому обьекту
this.draw = function(){
    console.log('drawVlad');
}
}
const circle = new Circle(1);  //new создает новый пустой обьект
// как только идет вызов оператора new он -- 
//1. создает пустой обьект
//2. 
//3. вернет обьект из функции

function Film(title, year, rate, comm){   //создание нового обьекта
    this.title = title,
    this.year = year,
    this.rate = rate,
    this.comments = comm
    }
    const film1 = new Film('Alien', 1982, 4.2, ['com1', 'com2']);
    console.log(film1);


'Dunamic Nature of Objects'

//обекты динамичны и в них можно добавлять ключи и функции(методы)

const circle = {
    radius : 1
}

circle.color = 'yellow';   //добавить в обьект circle ключ color со значением yellow
circle.functionNameVlad = function(){} //добавить в обьект circle функцию

console.log(circle);


//можно удалять функции и ключи

const circle = {
    radius : 1,
    color : 'yellow',
    functionNameVlad(){}

}

delete circle.color;             //удалить ключ
delete circle.functionNameVlad;  //удалить функцию

console.log(circle);


'Constructor Property'

function Animal(name) {                            //функция Animal созадет обьект
    this.name = name;
}
let dog = new Animal("Dog");

console.log(dog.constructor);                     //конструктор вернет функцию которая создала обьект dog -- [Function: Animal]



'Enumerating Properties of an Object'

const circle = {
    radius: 1,
    draw () {
        console.log ('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);  //лучший способ пронумерововать проверти обьекта

for (let key of Object.keys(circle))  //возвращает как стринг список
    console.log(key);

for (let entry of Object.entries(circle))  //возвращает пары ключ+значение как список
    console.log(entry);   //возможность полуить доступ ко всем пропретям и методам в обьекте

if ('radius' in circle) console.log('yes');  // проверить есть ли такая пропертся или метод в обьекте


'Cloning an Object'

const circle = {
    radius: 1,
    draw () {
        console.log ('cl-draw');
    }
};

//1й старый метод
const another = {};

for (let key in circle)
    another[key] = circle[key];  //но это старый подход

console.log(another);

another.draw()  //здесь мы вызываем функцию уже из нового обьекта что бы понять что обьект создался
if ('draw' in another) console.log('ppp') // проверили что такой метод есть в новом обьекте


//2й новый подход
const circle = {
    radius: 1,
    draw () {
        console.log ('cl-draw');
    }
};

const another2 = Object.assign({}, circle); //назначаем новую константу(это будущий обьект, и с помощью Object.assign метода создаем его на основании обьекта circle)

console.log(another2);

//можно не просто склонить а еще что то добавить в новый обьект, копирует из одного или нексолькиз в один обьект (может комбайнить)
const another3 = Object.assign({
    color: 'yellow' //это добавить нову пропертю в обьект
}, circle);

console.log(another3);

//3й еще проще (Спрэд оператор)

const circle = {
    radius: 1,
    draw () {
        console.log ('cl-draw');
    }
};

const another4 = {...circle};
console.log(another4);




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
'BUILD IN OBJECTS '

'Math метод' // дофига разного читать на MDN

console.log(Math.round(0.9)); // = 1

console.log(Math.max(1, 3, 5)); // = 5



'Методы работы со стрингой' // дофига разного читать на MDN

const vladstr = ' This is my first message ';

console.log(vladstr.length); // =24 количество символов в стринге, можно юзать для проверки того что юзер ввел минимально нужное количество символов
console.log(vladstr[1]); // =h возвращает символ из стринги с индесом 1
console.log(vladstr.includes('his')); // =true проверяет есть ли в стинге такие символы
console.log(vladstr.startsWith('This')); // =true что стринга начинается с такого-то
console.log(vladstr.endsWith('first')); // =false что стринга заканчивается на такое-то (false потому что стринга заканчивается на message)
console.log(vladstr.indexOf('my')); // =8 возвращает индекс указанного символа в стринге
console.log(vladstr.replace('my', 'his')); // =This is his first message, заменяет одно на другое
console.log(vladstr.toLocaleUpperCase()); // =THIS IS MY FIRST MESSAGE
console.log(vladstr.trim()); // ='This is my first message' срезает пробелы в начале И конце стринги
console.log(vladstr.trimStart()); // срезает пробелы в начале стринги
console.log(vladstr.trimEnd()); // срезает пробелы в конце стринги
console.log(vladstr.split(' ')); // сплитает стрингу и получится СПИСОК из  '', 'This', 'is', 'my', 'first', 'message', ''

console.log(vladstr.toUpperCase().trim());  // что бы применить несколько методов то указывать их вот так



'Escape Notation в стринге' // дофига разного читать на MDN
//1

const vladstr2 = ' This is my 'first message '; 
//так получается фигя потому что JS из за ' думает что стринг закончился перед first

const vladstr3 = ' This is my \'first message '; 
//если добавить \ то ' будет эскепт = This is my 'first message 

//2

'/n' //=new line
const vladstr4 = ' This is my \n first message ';
// =  This is my 
 //   first message 



///////////////////////////////////////////////////////////////////////

'Template Literals'
//если стригу оборачивать НЕ в '' а в `` (кнопа ё) то текст внутри можно писать с пробелами, спец символами и тд 
//и он выведется именно в том виде что был в коде

const email = 
`Hi John,

Call me on '11-00'

Best Regards,
Vlad`
//это выведется именно так как и написано, с абзацами и не будет ругаться на '', т.е по сути в `` можно писать что и как угодно

// используя 'Template Literals' можно использовать плэйсхолдеры

const name = 'Tod'
const email2 = 
`Hi ${name},

Call me on '11-00'

Best Regards,
Vlad`

//внутри курлов можно добавить математические вычисления или даже функцию

const name2 = 'Tod'
const email3 = 
`Hi ${name2} ${2 + 3}, 

Call me on '11-00'

Best Regards,
Vlad`

//если с функцией

function kavabanga (a, b){
    return (a+b);
 };
 

 const name = 'Tod'
 const email = 
 `Hi ${name} ${kavabanga(10, 25)}, 
 
 Call me on '11-00'
 
 Best Regards,
 Vlad`
 
 console.log(email);



 'Date' 
 //создание обьекта с датой и временем

 const now = new Date();  //когда внутри скобок, можно нажимать вверх и вниз что бы сменить версию конструктора даты
//в первом выбрано 3 значит оно вернет ТЕКУЩИЕ дату и время = 2024-06-16T16:56:19.775Z

const date1 = new Date('May 11 2018 00:01'); 
// выбран 1 = Date(value: string | number | Date)

const date2 = new Date(2020, 0, 11, 9, 11) //год, месяц, день, часы, минуты (месяц считается с 0, так что Январь = 0, Декабрь = 11)
// console.log(date2);

//у этого обьекта есть методы get и set
console.log(now.getFullYear()); // = 2024

//сменить год
now.setFullYear(2021);
console.log(now); // = 2021-06-16T17:23:18.295Z

//есть конверторы
console.log(now.toDateString()); // = Sun Jun 16 2024
console.log(now.toTimeString()); // = 21:13:09 GMT+0400 (Georgia Standard Time)
console.log(now.toISOString()); // = 2024-06-16T17:14:19.980Z