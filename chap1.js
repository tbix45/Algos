//sigma - given a number, return the sum of all positive integers from 1 up to the number (inclusive)
function sigma(num) {
    var sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}
// console.log(sigma(5))

//factorial - given a number, return the product of all positive integers from 1 up to that number (inclusive)
function factorial(num) {
    var product = 1
    var i = 1
    while (i <= num) {
        product *= i
        i++
    }
    return product
}
// console.log(factorial(5))

//threes and fives - adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
function threesFives() {
    var sum = 0
    var i = 100

}
// threesFives()
//NOT WORKING ============================================
//========================================================


//generate coin change -- given a value convert it into the fewest coins possible
function generateChange(change) {
    var penny = 0
    var nickel = 0
    var dime = 0
    var quarter = 0
    var roundedValue = change * 100
    while (roundedValue > 0) {
        if (roundedValue % 25 == 0) {
            quarter += 1
            roundedValue -= 25
        } else if (roundedValue % 10 == 0) {
            dime += 1
            roundedValue -= 10
        } else if (roundedValue % 5 == 0) {
            nickel += 1
            roundedValue -= 5
        } else {
            penny += 1
            roundedValue -= 1
        }
    }
    console.log("Quarters:", quarter)
    console.log("Dimes:", dime)
    console.log("Nickels:", nickel)
    console.log("Pennies:", penny)
    console.log(roundedValue)
}
generateChange(1.46)