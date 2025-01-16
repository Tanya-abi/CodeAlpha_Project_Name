document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Step 1: Check if the input is empty
const dobInput = document.getElementById('dob');
const dobDate = dobInput.value;

if (!dobDate){
    alert ("Please select a birthdate.");
    return;
}

// Step 2: Check if the birthdate is in the future
const currentDate = new Date();
const birthdate = new Date(dobDate);

// If validation passes, calculate age
if (birthdate > currentDate) {
    alert("Your birthdate cannot be in the future.");
    return;// Exit function if the birthdate is in the future
}


calculateAge(dobDate); // Placeholder function for age calculation (implement separately if needed)
runFacts(); // Generate a new fun fact
   
});


//Function to Calculate Age
function calculateAge(dobDate){

    const birthday = new Date(dobDate);
    const currentDate = new Date();
    const calcDate = (currentDate - birthday) / (1000 * 60 * 60 * 24 * 365); //Code multiples age by subtracting today's date from birth date. Because the code returns the answer in millisecond, this " (1000 * 60 * 60 * 24 * 365) calculation, converts the milliseconds to years"
    const displayAge = document.getElementById('age');

    if (calcDate < 1) {
        displayAge.innerHTML = `Welcome to the adventure playground of life! <br> <strong>You are just under ${(Math.floor(calcDate * 365 / 30))} month/s</strong>`; // Since calcDate is stored in years, this calculation converts the calcDate value to accomodate infants under 1year. 
    }else if (calcDate >= 1 && calcDate <= 12) {
        displayAge.innerHTML = `Childhood is all about curiosity, exploration, and endless fun!  <br><strong> You're ${Math.floor(calcDate)} year/s old.</strong>`;
    } else if (calcDate >= 13 && calcDate <= 19) {
        displayAge.innerHTML = `Teenage years are for discovering yourself and building your dreams. <br><strong> You're ${Math.floor(calcDate)} years old.</strong>`;
    } else if (calcDate >= 20 && calcDate <= 29) {
        displayAge.innerHTML = `Your twenties are a time to chase dreams and embrace independence. <br> <strong> You're ${Math.floor(calcDate)} years old.</strong>.`;
    } else if (calcDate >= 30 && calcDate <= 39) {
        displayAge.innerHTML = `Your thirties are for stability and pursuing deeper passions. <br> <strong> You're ${Math.floor(calcDate)} years old.</strong>.`;
    } else if (calcDate >= 40 && calcDate <= 49) {
        displayAge.innerHTML = `Life at forty is about balance and embracing everything you've achieved. <br> <strong> You're ${Math.floor(calcDate)} years old.</strong>.`;
    } else if (calcDate >= 50 && calcDate <= 59) {
        displayAge.innerHTML = `Your fifties are for celebrating your wisdom and life experiences. <br> <strong> You're ${Math.floor(calcDate)} years old.</strong>.`;
    } else if (calcDate >= 60 && calcDate <= 69) {
        displayAge.innerHTML = `Sixty is a time to enjoy the fruits of your labor and explore new interests. <br> <strong> You're ${Math.floor(calcDate)} years old.</strong>.`;
    } else if (calcDate >= 70) {
        displayAge.innerHTML = `Your seventies and beyond are about living every day to the fullest. <br> <strong> You're ${Math.floor(calcDate)} years old.</strong>.`;
    } else {
        displayAge.innerHTML = "Invalid age provided.";
    }

}


// Function to run random funfacts 
function runFacts(){

const randomFact = Math.floor(Math.random() * 10); //Runs random numbers between 0 till 10 and rounds of the decimal numbers to the nearest 0.
const funFact = document.getElementById("fun_fact");

switch( randomFact){
    case 0:
        funFact.innerHTML = `By the time you're 30 years old, your heart will have beaten over 1 billion times!`;
        break;
    case 1:
        funFact.innerHTML = `Your age changes on different planets. For example, if you're 20 years old on Earth, you’d only be 10 on Mars because it takes Mars almost twice as long to orbit the Sun.`;
        break;
    case 2:
        funFact.innerHTML = `Statistically, about 20 million people in the world share your exact birthday.`;
        break;
    case 3:
        funFact.innerHTML = `By the time you’re 60, you will have spent about 20 years of your life sleeping.`;
        break;
    case 4:
        funFact.innerHTML = `The oldest verified person ever lived to be 122 years old, Jeanne Calment from France.`;
        break;
    case 5:
        funFact.innerHTML = `The idea that one dog year equals seven human years is a myth! Aging in dogs depends on their breed and size.`;
        break;
    case 6:
        funFact.innerHTML = `The tradition of celebrating birthdays started with the Egyptians, but the first recorded birthday parties were held for pharaohs.`;
        break;
    case 7:
        funFact.innerHTML = `Astronauts experience slightly faster biological aging in microgravity environments compared to on Earth.`;
        break;
    case 8:
        funFact.innerHTML = `The oldest known living organism is a bristlecone pine tree in California, estimated to be over 5,000 years old`;
        break;
    case 9:
        funFact.innerHTML = `Humans have 300 bones at birth, but by adulthood, many of them fuse together, leaving only 206`;
        break;
        default:
        funFact.innerHTML = `Age is an issue of mind over matter. If you don’t mind, it doesn’t matter.`;

}
}