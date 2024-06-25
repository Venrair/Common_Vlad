'Function Decloration'  //можно вызвать И ДО и ПОСЛЕ её обьявления, walk() должен может быть и до функции и после

walk();                 

function walk (){
    console.log('Walk')
}

/////////////////////
'Function Expression'   //можно вызвать только ПОСЛЕ её обьявления, run() должен быть после функции

let run = function(){    
    console.log('run');
};

run();
/////////////////////

'HOISTING - когда стартует код JS engin переносит все Function Decloration в верх кода, таким образом эти функции доступны из любой части кода'


'ARGUMENTS' 'АРГУМЕНТЫ'

function sum (a, b){
    return a + b;
}

console.log(sum(1,2)); 
console.log(sum(1, 2, 3, 4, 5));///=3, можно передать больше Аргументов, при этом функция отработает, обработав только 2 первых


'Функция без параметров которая может принять любое количество аргументов'

function sum (){
    let total = 0;
    for (let value of arguments)
        total += value; //total = total + value
    return total;
};

console.log(sum(1, 2, 10, 50, 88));

///REST operator (ОБЯЗАТЕЛЬНО должен быть последним в списке параметров) 
//ok - function sum (price, value, ...args)
//not ok - function sum (price, ...args, value)

function sum (...args){           /// ... это Rest оператор он берет все выданные аргументы и собирает их в список = [ 1, 2, 10, 50, 88 ]
  console.log(args);
}

console.log(sum(1, 2, 10, 50, 88));

///сложение через REST и Reduce
function sum (...args){           
    return args.reduce((a , b) => a + b)
  }
  
  console.log(sum(1, 2, 10, 50, 88));


  'Default Parametrs'

  function interest(principal, rate = 3.5, years = 5){  // если после параметра прописать = то это будет его дефолтное значение 
    return principal * rate / 100 * years;              // и если не передать при вызове функции аргумент то он примет дефолтное значение из параметра     
  }                                                     // НО если назначен дефолт то все праметры после него ТОЖЕ должны иметь дефолт или это должен быть последний параметр
                                                        
  console.log(interest(10000));


  'Getters and Setters'

  //getters = access properties in an object
  //setters = change properties in an object

  const person = {
    firstName : 'Vlad',
    lastName : 'Bara',
    get fullName () {                                            //когда функция внутри обьекта слово function можно не писать 
        return `${person.firstName} ${person.lastName}`          //get перед функцией позволяет вызывать ее просто обращаясь к обьекту = console.log(person.fullName);
    },
    set fullName (value) {
     const parts = value.split(' ');
     this.firstName = parts[0];
     this.lastName = parts[1];
    }         
  };

  
  person.fullName = 'John Smith'  //set   'John Smith' это аргумент для парамета value -- set fullName (value)
  console.log(person.fullName);   //get
 

  'TRY , CATCH'

  const person = {
    firstName : 'Vlad',
    lastName : 'Bara',

     set fullName (value) {
      if (typeof value !== 'string') 
        throw new Error('Value is not a string');  // так вводится ошибка сработает если IF отработает в true

     const parts = value.split(' ');
     if (parts.length !== 2)
        throw new Error('Provide First and Last name');

     this.firstName = parts[0];
     this.lastName = parts[1];
    }         
  };
  
try 
{
    person.fullName = null;
}
catch (e) 
{
   console.log(e);
}


  person.fullName = 'John Smith';   
  console.log(person);


//////////////
  function sms (a, b){
    if (a + b === 10) 
        throw new Error ('Eblan');
    else console.log('Molodec');
  }

  try {
    console.log (sms(5, 5))
}
  catch (v){
    console.log('CxCx')
    console.log(v);
  };
  //////////////