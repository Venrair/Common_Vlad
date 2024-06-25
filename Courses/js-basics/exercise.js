
'Max of Two'

//var1

function max(n1, n2)
{ 
if (n1 > n2)
return n1
else
return n2
}
console.log(max(10, 55));

//var2

function max(n1, n2)
{ 
return (n1 > n2) ? n1 : n2
}
console.log(max(10, 55));





'Landscape or Portrait'

function isLandscape(width, height)
{
return (width > height);
}
console.log(isLandscape(150, 100));


'FizzBuzz'

function fizzBuzz(input) 
{
  if ((input % 3 === 0) && (input % 5 === 0))
  return 'FizzBuzz';

  if (input % 3 === 0)
  return 'Fizz';

  if (input % 5 === 0)
  return 'Buzz';

  if (typeof input !== 'number')
  return NaN;

return ('Can not split on 5 or 3');
}

const output = fizzBuzz(3);
console.log(output);


'Check Speed'

checkSpeed(70)

function checkSpeed(speed) {
 const speedLimit = 70;
 const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint){
    console.log('Ok');
    return;
  }
  
const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12)
  console.log('Pizdec');
  else
  console.log('Points' , points);
}

'Odd / Even'

showNumber(10)

function showNumber(limit)
{
  for (let i = 0; i <= limit; i++)

  if (i % 2 === 0)
    {console.log(i ,'EVEN');}

  else if (i % 2 !== 0)
  {console.log(i ,'ODD');}
}




'Count Truthy'

const array = [0, null, 1, 2, 3, 4, NaN]

function countTruthy(arrayFunc) {
  let count = 0;
  for (let value of array)
   if (value)
    count++;
    return count;
}

console.log(countTruthy(array));


'Show properties'

//вывести стринговые проперти обьекта

let movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b',
  actor: 'Vlad',
  good: true
};

showProperies(movie);

function showProperies(obj) {
  for (let property in obj)
   if (typeof obj[property] === 'string')
  console.log(property, obj[property]);
}


'Sum'

function sum(limit){
  let sum = 0;
  for (let i = 0; i <= limit; i++ )
  if (i % 3 === 0 || i % 5 === 0)
  sum += i;
return sum;
}

console.log(sum(10))




'Grade'

const mmarks = [99, 99, 99];

function calculateGrade(marks) {

  let sum = 0;
  for (let mark of mmarks)
  sum += mark;
  let average = sum / mmarks.length;
  
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';

}

console.log(calculateGrade(mmarks))


'Stars'

function showStars(rows){  
  for (let row = 1; row <= rows; row++)
{  let pattern = '';
  for (let i = 0; i < row; i++)
  pattern += '*'
console.log(pattern);}

}

showStars(5);



'Address object'

const adress = {
street: 'pushkina',
cite: 'Batumi',
zipCode: 90201
};


function showAdress (adress) {
  for (let key in adress)
    console.log(key, adress[key]); 
};

showAdress(adress);

//////////////////////////////

function createAddress(str, ct, zip){   
  return {
    Street : str,   
    City : ct,
    ZipCode : zip           
  };
}


const newAddress = createAddress('Pushkina', 'Batumi', 90201);
console.log(newAddress);
///////////////////////////////

function CreateAddressNew (str, ct, zip) {
  this.Street = str,
  this.City = ct,
  this.ZipCode = zip
};

const addressNew = new CreateAddressNew('Pushkina', 'Batumi', 90201);
const addressNew2 = new CreateAddressNew('Pushkina', 'Batumi', 90201);

function areEqual(addressNew, addressNew2){
return (addressNew === addressNew2);
};


function areSame(addressNew, addressNew2){
  return (
    addressNew.City === addressNew2.City && addressNew.Street === addressNew2.Street && addressNew.ZipCode === addressNew2.ZipCode
  );
  };

console.log(areEqual(addressNew, addressNew2));
console.log(areSame(addressNew, addressNew2));


///////////////////////////////

const Post = {
  title : 'a',
  body : 'b',
  author : 'c',
  views : 5,
  comment : [
    {
      author : 'a', 
      comment : 'com'
    },
    {
      author : 'c',
      comment : 'commeent'
    }
  ],
  isLive : true
};

console.log(Post);

//////////////////////////

function CreatePost (title, body, author, views, comment, isLive){
 this.title = title
 this.body = body
 this.author = author
 this.views = views
 this.comment = [comment]
 this.isLive = isLive
};

const newPost = new CreatePost("tit", "bod", "auth", 0, [{author: 'vlad', comme : 'kvkvavav'}, {author: 'ivan', comme : 'ututut'}], false); // что бы передать в список несколько обьектов надо их передавать внутри списка

console.log(newPost);

/////////////////////////////////

let arrOfPrice = [

{
  label : '$',
  title : 'Inexpensive',
  minP : 0,
  maxP : 100 
},

{
  label : '$$',
  title : 'Moderate',
  minP : 101,
  maxP : 500 
},

{
  label : '$$$',
  title : 'Expensive',
  minP : 501,
  maxP : 1000 
}
];

///////////////////////////////////////

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



'ARRAYS'
/////////////////////////////////

const numbers = arrayFromRange(1, 10);

console.log(numbers);

function arrayFromRange(min, max){
   const output = [];
   for (let i = min; i <= max; i++)
    output.push(i);
  return output;
};

/////////////////////////////////

const numbers = [1, 2, 3, 4];

function includes (array, searchElem){
 for (let element of array)
  if (element === searchElem)
    return true;
  return false;
};

console.log(includes(numbers, 5));

//////////////////////////////////

const numbers = [1, 2, 3, 4];

function except (array, excluded){
  const outputF = [];
  for (let element of array)
    if (!excluded.includes(element))
      outputF.push(element);
    return outputF;
};


const output = except(numbers, [1, 2]);

console.log(output);

//////////////////////////////////

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1)

function move(array, index, offset){

  const position = index + offset;
  if (position >= array.length || position < 0){
    console.error('Invalid Offset');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;

};

console.log(output);

//////////////////////////////

'Count Occurrences'
 
const numbers = [1, 2, 3, 4, 1]

const count = countOfOccures(numbers, 1)

console.log(count);

function countOfOccures(array, searchElement){
  let count = 0;
  for (let element of array)
    if (element === searchElement)
      count++;
    return count;
};
//////////////////////////////

'Get Max'

const numbers = [1, 2, 3, 4, 5];

const max = getMax(numbers);

console.log(max);

function getMax(array){
  if (array.length === 0) return undefined;

return array.reduce ((a, b) => (a > b) ? a : b);
};

//////////////////////////

'Movies'

const movies = [
  {
    title : 'a',
    year : 2018,
    rating : 4.5
  },
  {
    title : 'b',
    year : 2018,
    rating : 4.7
  },
  {
    title : 'c',
    year : 2018,
    rating : 3
  },
  {
    title : 'd',
    year : 2017,
    rating : 4.5
  }
];

const titles = movies
 .filter(m => m.year === 2018 && m.rating >= 4)
 .sort((a, b) => a.rating - b.rating)
 .reverse()
 .map(m => m.title)

 console.log(titles);

 ///////////////////

 function sum (...args){           
  if (args.length === 1 && Array.isArray(args[0]))
    args = [...args[0]];
  
  return args.reduce((a , b) => a + b)
}

  console.log(sum([1, 2, 10, 50, 88]));
/////////////////////////////////////////////////////////////

let circle = {
  radius: 10,
  area: 77,

  get getRadius() {
    return this.radius;
  },

  set setRadius(newRadius) {
    this.radius = newRadius;
  },

  get area1() {
    return circle.area;
  }
};


console.log('Area = ' + circle.area1);
circle.setRadius = 13;
console.log('Radius = ' + circle.getRadius);
////////////////////////////////

try
{
const numbers = [1, 2, 3, 4, 1];
const count = countOfOccures(numbers, 1);
console.log(count);
}
catch(e)
{
console.log(e);
}

function countOfOccures (array, searchElement) {
  if (Array.isArray(array) !== true)
  throw new Error ('Some Error');
  return array.reduce ((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    return accumulator + occurence;
  },0 );
}


function name (a) {
  if (a === false)
    throw new Error ('Eblan');
  console.log(a);
}


name(true);