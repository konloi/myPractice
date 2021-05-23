const map = new Map();
map.set('I', 1);
map.set('V', 5);
map.set('X', 10);
map.set('L', 50);
map.set('C', 100);
map.set('D', 500);
map.set('M', 1000);

const romanToInt = (s) =>{
 let sum = 0;
 let i = 0;
 let array = Array.from(s);
 
 while(i<array.length){
    if(i>0 && (map.get(array[i]) > map.get(array[i-1]))){
        sum = sum - 2*map.get(array[i-1]);
    }
    sum = sum + map.get(array[i])
    i++;
 }

 return sum;
}


console.log(' roman to int result is = ' + romanToInt('LVIII'));


// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.