
Conditional Statements

-If...else
-Switch...Case


'If...else'

//структура
if (условие) {     //если условие приводит к True то выполняется действие под if, если false то  не выполняется и переходит к проверке следующего условия 
    действие;
    действие;
    }
    else if (условие) {    //ковычки{} ставятся если несколько действий, если одно то можно не ставить
        действие;
        действие;
        }
        else(условие) 
            действие;
            

//пример

let hour = 12;

if (hour >= 6 && hour <= 12) {
console.log('Good Morning');
}
else if (hour >= 13 && hour <= 18) {
    console.log('Good Afternoon');
    }
    else if (hour >= 19 && hour <= 24) {
        console.log('Good Evening');
        }
       else {
        console.log('Invalid Hour Provided')
       }



'Switch...Case'

let role = 'guest';

switch (role){
    case role = 'guest':
        console.log('User is Guest');
        break;   //выход из цикла если условие соблюлось

        case role = 'admin':
            console.log('User is Admin');
            break;

            default:
                console.log('Her poimi kto'); //если ни один из кейсов не выдал True то отработает по default
}