let randomNumber = Math.floor(Math.random() * 998) + 1;
let attempts = 1;
let guess = window.prompt('Enter a guess for the number between 1 and 999')
guess = Number(guess)


while (guess != randomNumber || guess != 999){
    if (isNaN(guess)){
        guess = window.prompt('Enter a valid number')
    }
    else if(guess == 999){
        window.alert(`You entered 999 breaking out of the game`)
        break
    }
    else if (guess > randomNumber){
        guess = window.prompt('This number is to high, try again')
        attempts = attempts + 1
    }
    else if (guess < randomNumber){
        guess = window.prompt('This number is to low, try again')
        attempts = attempts + 1
    }
    else{
        window.alert(`You got out the loop with with ${attempts} attempts`)
        break
    } 
}
// Prompt user for a number between 1 and 10, or type 999 to exit.

// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
// Loop should exit if user enters 999 and not display "Too high!"
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.