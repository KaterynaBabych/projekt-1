// //1
// // Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку.
// // При объявлении присвой переменным следующие характеристики товара:

// // название - строка "Droid"
// // цена за штуку - число 2000

// let productName = "Droid";
// let pricePerItem = 2000;

// // 2
// // Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов.
// //  Переопредели значения переменных pricePerItem и productName после их объявления.

// productName = "Repair droid";
// pricePerItem = 3500;

// // 3
// // Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

// // topSpeed - число 160.
// // distance - число 617.54.
// // login - строка "mango935".
// // isOnline - буль true.
// // isAdmin - буль false.

// let topSpeed = 160;
// let distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// // 4
// // Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
// //  Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

// // 5
// // Объяви перемнную message и запиши в неё сообщение о покупке,
// //   строку в формате: "You picked <имя товара>, price per item is <цена товара> credits".
// //   Где < имя товара > и < цена товара > это значения переменных productName и pricePerItem.
// //   Используй синтаксис шаблонных строк.
// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;


// // 6
// // Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа.
// //  Объяви переменные и присвой им соответствующие значения:

// // pricePerDroid - цена одного дроида, значение 800
// // orderedQuantity - количество дроидов в заказе, значение 6
// // deliveryFee - стоимость доставки, значение 50
// // totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
// // message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits.
// // Delivery(<delivery fee> credits) is included in total price."

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// // 7
// // Объяви функцию sayHi, внутри которой добавь console.log() со строкой
// // "Hello, this is my first function!".После объявления вызови функцию sayHi.

//  function sayHi() {
//   console.log("Hello, this is my first function!")
// };
// sayHi()

// // 8
// // Функция add должна уметь складывать три числа и выводить результат в консоль.
// //  Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// // Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// function add(a, b, c ) {
//    console.log(`Addition result equals ${a+b+c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// // 9
// // Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.
// function add(a, b, c) {
//   return a+b+c;
// }

// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// // 10
// // Функция makeMessage(name, price) составляет и возвращает сообщение о покупке.
// //  Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// // name - название товара
// // price - цена товара
// // Дополни код функции так, чтобы в переменную message записывалась строка
// // "You picked <product name>, price per item is <product price> credits",
// //   где < product name > и < product price > это значения параметров name и price.Используй синтаксис шаблонных строк.

// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//    return message;
// };