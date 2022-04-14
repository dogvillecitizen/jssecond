// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.

function oddOrEven(a) {
  if (oddOrEven % 2 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
oddOrEven(7);

// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.

function rectArea(a, b) {
  console.log(`rectangle  area - ${a * b}`);
}
rectArea(3, 5);

// // 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და
// დააბრუნებს კვადრატის ფართობს. ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.

function square(a) {
  console.log(`square area - ${a * a}`);
}
square(3, 5);

// 4 დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(num);
}
random(1, 100);


// 5. შექმენით ობიექტების 5 ელემენტიანი მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).







// 6 დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს 
// ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება



// function getCurrencySymbolFromCode(a, b, c) {
//   if (getCurrencySymbolFromCode a == "GEL") {
//     console.log("L");
//   } else {
//     console.log("NOT FOUND");
//   }
// }
// getCurrencySymbolFromCode('GEL', 'USD', 'EUR', 'NOK');


// function sum(a, b) {
// 	// var myVar = "var";
// 	a++;
// 	b++;
// 	// console.log(a, b);
// 	if (a > 0) {
// 		return a + b;
// 	} else {
// 		return a + b;
// 	}

// 	console.log(a + b);
// }
