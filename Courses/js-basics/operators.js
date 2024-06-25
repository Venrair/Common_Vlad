
--Arithmetic
--Assignment
--Comparison
--Ternary
--Logical

'Arithmetic'

let x = 10;
let y = 3;


console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Increnement (++) увеличивает значение на 1
- если ДО переменной то сначала прибавляет а потом выводит в консоль
console.log(++x); - в консоли увидим 11

- если ПОСЛЕ переменной то сначала выводит в консоль а потом прибавляет (поэтому что бы увидеть результат надо вызвать переменную еще раз)
console.log(y++)
console.log(y)  - в консоли увидим 4

//Decrenement (--) уменьшает значение на 1 (работает так же как и Increment)


'Assignment'

=

let x = 10 //назначили значение 10 переменной х

//addition assignment operator
x += 5 
x = x + 5 //это то же самое что 'x +=5'

x *= 2 
x = x * 2 //это то же самое что 'x *= 2'

и так далее со всеми арифметическими операторами


'Comparison'

//Relational
let x = 10
console.log(x > 0) //в консоли будет boolean (true / false)
<
>
>=
<=

//Strict Exuality (равен ли) (одинаковые тип и значение)
console.log(x === 10) //в консоли будет true
console.log(x !== 10) //в консоли будет false
console.log(10 === 10) //в консоли будет true


//Lose Exuality
console.log('10' == 10) //в консоли будет true, сравниваются стринга и намбер
console.log(1 == true) //в консоли будет true, правое значение переводится в тот же тип данных что и левое


'Ternary'
//if the customer has more than 100 he is type GOLD
//if lower than type SILVER

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

'Logical'

--and (&&)
--or  (||)
--not (!)

//and (&&)
// returns TRUE if BOTH operants are TRUE
console.log(true && false) - //консоль вернет True

//пример
let highIncome = true;
let goodCreditScore = true;
let eligableForLoan = highIncome && goodCreditScore;
console.log(eligableForLoan); //есть две переменные "высокий доход" и "хорошая кредит история" на их основании используя логический "and '&&'" можно в 3ю переменную вывести достоин ли он Кредита  


//OR (||)
// returns TRUE if ONE(any) operants is TRUE
console.log(true || false) - //консоль вернет True потому что один из них true
console.log(false || false) - //консоль вернет False потому что оба False

//NOT (!)
//меняет на противоположное, было true станет false , было false станет true

------------------Logical Operators with NON-Boolean----------------------------
//если в логическом выражении используется хоть одно значение которое не является Boolean то js пытается его интерпретировать как Falsy or Truthy

//'Falsy'
- undefined
- null
- 0
- false
- '' empty
- NaN

//'Truthy'
- всё остальное что не является Falsy

//пример
console.log(false||1); = //в консоль выведется 1, потому что по оператору OR если хоть одни True то выведется True, здесь 1 интерпретируется как Truthy


Приоритет Операторов можно или гуглить или обозначить скобками

let x = 1 + 2 * 3; = 7 (потому что тут приоритет у умножения)
let x = (1 + 2) * 3; = 7 (потому что тут приоритет у того что взято в скобки)