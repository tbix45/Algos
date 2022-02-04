//1. print all integers from 1 to 255
function printInt() {
    for (let i = 1; i < 256; i++) {
        console.log(i)
    }
}
// printInt()

//2. print sum 0 - 255
function printSum() {
    var sum = 0
    for (let i = 0; i < 256; i++) {
        sum += i
        console.log(i)
        console.log(sum)
    }
}
// printSum()

//3. given an array find and print the largest element
function printLarge(arr) {
    var max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max)
}
// printLarge([10, 1, 3, 5, 2])

//4. create an array with all the odd integers between 1 and 255 (inclusive)
function oddArray() {
    var odds = []
    for (let i = 1; i <= 255; i++) {
        odds.push(i)
    }
    console.log(odds)
}
// oddArray()

//5. given an array and a value y, count and print the number of array values greater than y 
function greaterY(arr, value) {
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            count += 1
            console.log(arr[i])
        }
    }
    console.log("Count:", count)
}
// greaterY([2, 3, 1, 4], 1)

//6. given an array, print the max, min, and average vaules of the array
function minMaxArray(arr) {
    var min = arr[0];
    var max = arr[0];
    var total = 0;
    var average;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log("Min:", min)
    console.log("Max:", max)
    average = total / arr.length
    console.log("Average:", average)
}
// minMaxArray([1, 2, 3, 4, 5])

//7. replace any negative array values with 'dojo'
function replaceArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "dojo"
        }
    }
    console.log(arr)
}
// replaceArray([1, -2, -2, 2, 4, -2])

//8. print odds 1-255
function printOdds() {
    for (let i = 1; i <= 255; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
// printOdds()

//9. iterate through a given array, printing each value
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// printArray([1, 2, 3, 4, 10])

//10. analyze an arrays values and print the average
function averageArray(arr) {
    var sum = 0
    var average;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    average = sum / arr.length
    console.log(average)
}
// averageArray([1, 2, 3, 4, 5])

//11. square each value in a given array, returning the same array with changed values
function squareArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
    }
    console.log(arr)
}
// squareArray([2, 3, 4])

//12. return the given array, after setting any negative values to zero
function zeroArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    console.log(arr)
}
// zeroArray([-1, -2, -3, 4])

//13. given an array, move all values forward by one index, dropping the first and leaving a 0 value at the end
function moveArray(arr) {
    arr.shift()
    arr.push(0)
    console.log(arr)
}
// moveArray([1, 2, 3, 4, 5])