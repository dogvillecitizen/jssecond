let avgArray = [4, 6, 8, 12, 0];

let  elem1 = avgArray[0]
let  elem2 = avgArray[1]
let  elem3 = avgArray[2]
let  elem4 = avgArray[3]
let  elem5 = avgArray[4]

let sum = (elem1 + elem2 + elem3 + elem4 + elem5);
let arrlength =avgArray.length;
let countAvg = sum / arrlength;

// console.log(elem1);
// console.log(elem2);
// console.log(elem3);
// console.log(elem4);
// console.log(elem5);
// console.log(sum);
// console.log(arrlength);
// console.log(countAvg);

const objectInArray = [
	{
		name: 'bilbo',
        age: 129,
	},
    {
		name: 'legolas',
        age: 1500,
	},
    {
		name: 'aragorn',
        age: 80,
	},
    {
		name: 'gandalf',
        age: 500,
	},
    {
		name: 'gimli',
        age: 50,
	},

]

// console.log(objectInArray);

let myUser = {
    firstName : "bilbo",
	lastName: 'baggins',
	address: ["shire", "middle earth"],
	userAge: 129,
	phoneNumbers: [12345676, 3234556],
}

// console.log(myUser);

let showSentence = `my name is ${myUser.firstName} i am  ${myUser.userAge} years old, My address is ${myUser.address}`;

// console.log(showSentence)