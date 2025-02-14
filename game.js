let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 1;
let guess = window.prompt('Enter a guess for the number between 1 and 999')
guess = Number(guess)


while (guess != randomNumber){
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