function isOdd(n){
    if (n%2===1){
        return true
    }
    return false
}

function isMultipleOfFive(n){
    if (n%5===0){
        return true
    }
    return false
}

function isPrime(n){

    for( let i = n -1; i>=2; i--){
        if(n % i === 0){
            return false
        }
    }
    return n > 1;
}



function snapCrackle(maxValue) {
    let text = [];
    for (let value = 1; value <= maxValue; value++) {
        let msg = '';

        if (isOdd(value)) {
            msg += "Snap";
           
       }

       if (isMultipleOfFive(value)) {
            msg += "Crackle";
           
        }


        if (msg.length === 0){
            msg += value;
        }

        text.push(msg)
         
    }
    return text.join(", ");
}
console.log("snapCrackle(20)")
console.log(snapCrackle(20))

function snapCracklePrime(maxValue) {
    let text = [];
    for (let value = 1; value <= maxValue; value++) {
        let msg = '';

        if (isOdd(value)) {
            msg += "Snap";
           
       }

       if (isMultipleOfFive(value)) {
            msg += "Crackle";
           
        }

        if(isPrime(value)){
            msg += "Prime"
        }

        if (msg.length === 0){
            msg += value;
        }

        text.push(msg)
         
    }
    return text.join(", ");
}
console.log("snapCrackle(25)")
console.log(snapCracklePrime(25))



