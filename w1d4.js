//is strict palindrome -- take a string and if it is a palindrome return a boolean
function isPal(str) {
    var revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    // console.log(revStr)
    if (revStr == str) {
        return ("It is a palindrome", true)
    }
    return ("Not a palindrome", false)
}
// console.log(isPal("car"))
// console.log(isPal("racecar"))
// console.log(isPal("kayak"))

//is loose palindrome -- take a string and if it is a palindrome return a boolean, regardless of caps
function isLoosePal(str) {
    var revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    // console.log(revStr)
    if (revStr.toLowerCase() == str.toLowerCase()) {
        return ("It is a palindrome", true)
    }
    return ("Not a palindrome", false)
}
// console.log(isLoosePal("car"))
// console.log(isLoosePal("racecar"))
// console.log(isLoosePal("Kayak"))

function isPalindrome(str) {
    for (let left = 0; left < str.length / 2; left++) {
        var right = str.length - 1 - left
        if (str[left] != str[right]) {
            return false
        }
    }
    return true
}
console.log(isPalindrome("kayak"))
console.log(isPalindrome("car"))