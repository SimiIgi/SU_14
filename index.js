let hour = 0;
let minute = 0;

while (hour < 24) {
  if (minute < 10) {
    console.log(hour + ':0' + minute);
  } else {
    console.log(hour + ':' + minute);
  }
  minute++;
  if (minute === 60) {
    hour++;
    minute = 0;
  }
}



/* ULOHA 2 */

/* function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

let count = 0;
while (true) {
  count++;
  let result = roll();
  console.log(Hod ${ count }: ${ result });
  if (result === 6) {
    console.log(Šestka padla na ${ count }.hodu.);
    break;
  }
} */