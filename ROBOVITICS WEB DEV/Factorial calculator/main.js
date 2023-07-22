function calculateFactorial() {
    const numberInput = document.getElementById("numberInput").value;
    const number = parseInt(numberInput);

    if (isNaN(number) || number < 0 || number % 1 !== 0) {
        document.getElementById("result").textContent ="Please enter a non-negative integer.";
    } 
    else {
    const factorial = computeFactorial(number);
    document.getElementById("result").textContent = `Factorial of ${number} is ${factorial}.`;
    }
}

function computeFactorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}
