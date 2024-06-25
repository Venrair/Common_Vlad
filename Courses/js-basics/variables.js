

- Primitives Types
--String
--Number 
--Boolean
--Symbol
--undefined
--null

- Reference Types
--Object
--Array
--Function


'Переменная Variables' 
обозначается как let
let firstName = 'Vlad';

'Константа Constant'
не меняет свое значение
обозначается как const
const interestRate = 0.3;




'Primitives Types'

let firstName = 'Vlad'; //String
let age = '30'; //Number
let isApproved = false; //Boolean
let color = null; //null

если обозначить переменную но не дать ей значение то будет undefined
let lastName; //undefined

что бы в браузере посмотреть тип переменной - typeof firstName


'Reference Types'

//Object

let person = {                //object
    name: 'Vlad',             //proprety of object // {key} : {value},
    age: 30,
};

как работать с этими пропертями - 

//Dot notation
person.name = 'Lika';

можно использовать и для чтения проперти из обьекта

console.log (person.name);

//Bracket Notation
person['name'] = 'Mary';



//Array

let selectedColors = []; //empty Array
let selectedColors = ['red', 'blue']; //array with values

когда это выводится в консоль у элементов есть индекс - 0, 1 - обозначает порядок элементов в списке
['red', 'blue']
0: "red"
1: "blue"

если указать конкретный индекс то выведется только отдельно
console.log (selectedColors[0]);

длинна списка может менятся если к нему добавить еще элементов
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 'gray';

так выведет количество элементов в списке
console.log (selectedColors.length);


//Function

function some() {
}

function - обьявление функции
some - имя функции
{} - то что тут внутри это Body функции

если в дальнейшем в коде написать имя функции то это вызовет ее выполнение

//Пример --
function some() {
    console.log('Hello')
}

some();

указали функцию
в Body прописали что она делает
потом вызвали её 
====
в консоли выведется 'Hello'

Добавление параметра к функции, параметр будет действовать только внутри этой функции

function some(name) //name - параметр
{
    console.log('Hello ' + name)
}

some('John'); //вызывая функцию some мы должны передать значение(argument) для параметра "name", 'John' is an argument for 'name' parameter 

можно использовать несколько параметров

function some(name, lastName) //name и lastName - параметры
{
    console.log('Hello '+ name  + ' ' + lastName)
}

some('John', 'Doe'); //по очереди указываются значения для параметров


//Types of Functions
--Performing a task
--Calculating a value

function square(number)
{
    return number*number;
}
console.log(square(2));