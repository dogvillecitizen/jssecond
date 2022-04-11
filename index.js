// N1 davaleba ???????????????? 

const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log('sun');
    break;
  case 1:
    console.log('mon');
    break;
  case 2:
    console.log('tue');
    break;
  case 3:
    console.log('wed');
    break;
  case 4:
    console.log('thur');
    break;
  case 5:
    console.log('fri');
    break;
  case 6:
    console.log('sat');
    break;

  default:
    console.log("not found");
    break;
}

// N2 davaleba

for (var i = 0; i < 100; i++) {
  console.log(i);
}
// // N3 davaleba

var i = 0;
while (i < 50) {
  console.log(i);
  i++;
}
// // N4 davaleba

do {
  i++;
  console.log(i);
} while (i < 150);

// // N5 davaleba
