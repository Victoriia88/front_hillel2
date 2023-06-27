let birthYear = prompt('Please enter your year of birth?');
let city = prompt('What is your city?');
let typeOfSport = prompt('What is your favorite sport?');

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let messageBirth =`Your ${age} years old.`;

if (!birthYear) {
    messageBirth = (`It's a pity that you didn't want to enter your year of birth!`);
  } 

let messageCity = `You live in city ${city}`;

if (city === "Kyiv") {
    messageCity = `You live in the capital of Ukraine, ${city}.`;
} else if (city === "Washington") {
    messageCity = `You live in the capital of USA, ${city}.`;
} else if (city === "London") {
    messageCity = `You live in the capital of Great Britain, ${city}.`;
}
else if (!city) {
    messageCity = `It's a pity that you didn't want to enter your city!`;
}


let mma = ('Jonathan Dwight Jones');
let box = ('Volodymyr Klichko');
let football = ('Lionel Messi');

let messageSport = `Cool! Do you want to become ${typeOfSport} ?`;

  if (typeOfSport === "mma") {
    messageSport = `Cool! Do you want to become ${mma} ?`; 
  } else if (typeOfSport === "box") {
    messageSport = `Cool! Do you want to become ${box} ?`; 
  } else if (typeOfSport === "football") {
    messageSport = `Cool! Do you want to become ${football} ?`; 
  }
  else if (!typeOfSport) {
    messageSport = (`It's a pity that you didn't want to enter your favorite sport!`);
  }
  else{
    messageSport = `Your favorite sport is `  + typeOfSport;
  }

alert(` ${messageBirth} ${messageCity}  ${ messageSport}`);


