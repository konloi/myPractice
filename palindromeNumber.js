const checkPalindrome = (x) => {
    /*
    1.finding absolute value from input
    2.convert to array
    3.loop checking and index < mid then check start == length
    */

    if (x == null) return false;
    if (x < 0) return false;

    let a = Math.abs(x);
    let arrayNumber = Array.from(a.toString());
    let i = 0;
    let mid = ~~(arrayNumber.length / 2)
    if(mid < 1) return true;

    let isPalindome = false;
    while (i < mid) {
        if (arrayNumber[i] == arrayNumber[(arrayNumber.length - 1) - i]) {
            console.log(' checking between ' + arrayNumber[i] + ' and ' + arrayNumber[(arrayNumber.length - 1) - i])
            isPalindome = true
        } else {
            console.log(' checking between ' + arrayNumber[i] + ' and ' + arrayNumber[(arrayNumber.length - 1) - i])
            isPalindome = false;
            break;
        }
        i++;
    }
    return isPalindome;
}


console.log('-- result : ' + checkPalindrome(1000021));


