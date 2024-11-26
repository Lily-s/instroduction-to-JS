function NameAge() {
  let userName = prompt("What is your name?");
  //userName ? alert(`Hello, ${userName}!`) : alert("Hello, Guest!");

  userName = userName ? userName : "Guest";

  //alert(`Hello, ${userName}!`);

  const currentYear = 2024;
  let year = prompt(`Hello, ${userName}, What's your year of birth?`);

  if (year > 0) {
    let age = currentYear - year;
    alert(`are you ${age}?`);
  } else {
    alert("year has to be a number!");
  }
}

function perimetr() {
  let sideLength = prompt("Please enter the length of a side of the square:");
  let perimeter = 4 * sideLength;
  alert("The perimeter of the square is: " + perimeter);
}
function radius() {
  let radiusCircle = prompt("What is a radius of a circle?");
  let area = 3.1415926 * radiusCircle * radiusCircle;
  alert("The radius of your circle is: " + area);
}

function speed() {
  let distance = prompt(
    "What is a distance beetween your home and work in km?"
  );
  let time = prompt("what time you want to cover it within in hours?");
  let speed = distance / time;
  alert(
    "To cover " +
      distance +
      " km in " +
      time +
      " hours, you need to travel at a speed of " +
      speed +
      " km/h."
  );
}
function nameAgeCountry() {
  let userName = prompt("Enter you name please");
  let userAge = prompt("Enter you age please");
  let countryBirth = prompt("Enter your country of birth");
  console.log(
    "%c " + userName + " %c" + userAge + " %c" + countryBirth,
    "color:red",
    "color:blue",
    "color:green"
  );
}
function ageIn() {
  let year = prompt("What is your birth year?");
  console.log("in 2025 you'll be %c" + (2025 - year), "color: red");
  console.log("in 2029 you'll be %c" + (2029 - year), "color: blue");
  console.log("in 2050 you'll be %c" + (2050 - year), "color: green");
}

function convertCurrency() {
  let usdAmount = parseFloat(document.getElementById("usd").value);
  let eurAmount = usdAmount * 0.92;
  eurAmount = eurAmount.toFixed(2);

  if (isNaN(eurAmount)) {
    document.getElementById("result").innerHTML =
      "Please enter the valid number";
  } else {
    document.getElementById("result").innerHTML =
      "result is " + eurAmount + " EUR";
  }
}

function calcFileCount(flashDriveMemoryGB) {
  if (isNaN(flashDriveMemoryGB) || flashDriveMemoryGB < 0.8) {
    return 0;
  }

  const fileSizeMB = 820;
  const flashDriveMemoryMB = flashDriveMemoryGB * 1024;
  const howManyFiles = Math.floor(flashDriveMemoryMB / fileSizeMB);
  return howManyFiles;
}

function driveMemory() {
  let gb = parseFloat(document.getElementById("gb").value);
  let count = calcFileCount(gb);
  document.getElementById("resultMB").innerHTML = "result is " + count;
}

function output(where, what) {
  document.getElementById(where).innerHTML = what;
}

function MountChocolate() {
  let moneyIhave = parseFloat(document.getElementById("wallet").value);
  let chocolatePrice = parseFloat(document.getElementById("price").value);
  if (
    isNaN(moneyIhave) ||
    isNaN(chocolatePrice) ||
    moneyIhave <= 0 ||
    chocolatePrice <= 0
  ) {
    output("resultMountChocolate", "Enter the valid value");
    output("resultMoneyLeft", "");
    return;
  }

  let resultMountChocolate = Math.floor(moneyIhave / chocolatePrice);
  let resultMoneyLeft = moneyIhave % chocolatePrice;
  output(
    "resultMountChocolate",
    "You can buy " + resultMountChocolate + " chocolates"
  );

  output("resultMoneyLeft", "Money I still have " + resultMoneyLeft + " eur  ");
}

function greeting() {
  var labels = {
    en: "Enter your name",
    cs: "Zadejte své jméno",
    ua: "Введіть ваше ім'я",
  };

  var greetings = {
    en: "Hello %user%!",
    cs: "Ahoj %user%!",
    ua: "Привіт %user%!",
  };

  let lang = document.getElementById("lang").value;

  document.getElementById("greetingNameLabel").innerHTML = labels[lang];

  let userName = document.getElementById("greetingName").value;
  if (userName == "") {
    document.getElementById("greetingResult").innerHTML = "";
    return;
  }
  let template = greetings[lang];

  let greetingResult = template.replaceAll("%user%", userName);

  document.getElementById("greetingResult").innerHTML = greetingResult;
}

function kids() {
  var label = 
}
const child1 = {
  name:
  age: 

}

const child2 = {
  name:
  age: 

}