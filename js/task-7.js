// const stack = function () {
//     const arr = [];
//     return function (val){
//         if (val){
//             arr.push(val);
//         }else{  
//             return arr.pop() || null;
//         }
//     }
   
// }

// const c_stack = stak();

// console.log(c_stack());//null
// c_stack('Hello1');
// c_stack('Hello2');
// c_stack('Hello3');
// console.log(c_stack());//Hello3
// console.log(c_stack());//Hello2
// c_stack('Hello4');
// console.log(c_stack());//Hello4
// console.log(c_stack());//Hello1
// console.log(c_stack());//null
// c_stack('Hello5');
// console.log(c_stack());//Hello5


// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття
// 3,1 ) Для перетворення використати нашу ф-ю showCentury.



// function convertCentury() {
//     const years = [];
//     do {
//      let input = prompt('enter year');
//      if(input === null || isNaN(input)){
//          console.log('Canceled');
//          break;
//          }
//          years.push(+input);
//      }while (true);
 
//      for(const year of years){
//         console.log(showCentury(year));      
//      }
//     }
 
 
 
//  function showCentury(year) {
//      let result = Math.ceil(year / 100);
//      return `${year} рік - ${result} століття`;
//  }
 
//  convertCentury(); 


/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
//   };
  
//   /*
//    * Каждая транзакция это объект со свойствами: id, type и amount
//    */
  
//   const account = {
//     // Текущий баланс счета
//     balance: 0,
  
//     // История транзакций
//     transactions: [],
  
//     /*
//      * Метод создает и возвращает объект транзакции.
//      * Принимает сумму и тип транзакции.
//      */
//     createTransaction(amount, type) {
//        return   {id: this.transactions.length+1, type, amount};
//     },
  
//     /*
//      * Метод отвечающий за добавление суммы к балансу.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций
//      */
//     deposit(amount) {
//         this.balance += amount;
//         const newAction = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transactions.push(newAction);
//     },
  
//     /*
//      * Метод отвечающий за снятие суммы с баланса.
//      * Принимает сумму танзакции.
//      * Вызывает createTransaction для создания объекта транзакции
//      * после чего добавляет его в историю транзакций.
//      *
//      * Если amount больше чем текущий баланс, выводи сообщение
//      * о том, что снятие такой суммы не возможно, недостаточно средств.
//      */
//     withdraw(amount) {
//         if(this.balance >= amount){
//           const newAction = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(newAction);  
//         this.balance -= amount;
//         }else console.log(`not enougth ${amount - this.balance}$`);
        

       
        
//     },
  
//     /*
//      * Метод возвращает текущий баланс
//      */
//     getBalance() {
//         return this.balance;
//     },
  
//     /*
//      * Метод ищет и возвращает объект транзации по id
//      */
//     getTransactionDetails(id) {
//         for(const tr of this.transactions)
//         if (tr.id === id){
//             return id;
//         }
//     },
  
//     /*
//      * Метод возвращает количество средств
//      * определенного типа транзакции из всей истории транзакций
//      */
//     getTransactionTotal(type) {
//         let total = 0;
//         for(const tr of this.transactions)
//         if (tr.type === type){
//             total+=tr.amount;     
//         }
//         return total;
//     },
//   };





//   console.log(account.getBalance());
//   account.deposit(100);
//   console.log(account.getBalance());
//   account.deposit(50);
//   console.log(account.getBalance());
//   account.withdraw(100);
//   console.log(account.getBalance());
//   account.withdraw(60);
//   console.log(account.getBalance());
//   account.getTransactionDetails(1);

//   console.log(account.getTransactionDetails(2));
  

//   console.log(
//    account.getTransactionTotal(Transaction.DEPOSIT));


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function(allLogins, login) {
  return !allLogins.includes(login);  
};

const addLogin = function(allLogins, login) {

  if(!isLoginValid (login)){
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  if(isLoginUnique(allLogins, login)){
    allLogins.push(login);
     
    return 'Логин успешно добавлен!';
  } else {
    return 'Такой логин уже используется!';
  }
   
 
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'


