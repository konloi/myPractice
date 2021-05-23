/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let a = Array.from(num1);
    let b = Array.from(num2);
    let result = '';
    let carry = false;
    let lengthA = a.length-1;
    let lengthB = b.length-1;
    
    while((lengthA>=0)||(lengthB>=0)){
        let sum = 0;
        if(lengthA<0){
            sum += parseInt(b[lengthB]);
        }else if(lengthB<0){
            sum += parseInt(a[lengthA]);
        }else{
            sum = parseInt(a[lengthA])+parseInt(b[lengthB]);
        }  
        if(carry){
            sum += 1;
        }
        if(sum>=10){
            carry = true
        }else{
            carry = false;
        }
        
        result = (sum%10).toString() + result;       
        lengthA--;
        lengthB--;      
     }
   
    if(carry){
        result = "1"+result;
    }
    return result;
    
  
    
};

 /*
    1. convert num1 and num2 to array
    2. find it's length , loop through Max -> 0 
    3. sum = num1 + num2 ,  if sum>=10 , carry = true , currentIndex = sum%10;
    4. after loop, if 
 */