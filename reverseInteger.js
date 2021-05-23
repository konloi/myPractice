let reverseInteger = (x) => {
  let minusFlag;
  let absolute;
  let arrayNum;

  if (x == 0) {
    return 0;
  } else if (x > 0) {
    minusFlag = false;
  } else {
    minusFlag = true;
  }

  absolute = Math.abs(x);

  while (absolute % 10 == 0) {
    absolute = absolute / 10;
  }
  arrayNum = Array.from(absolute.toString());

  let reverseNum = "";
  let i = 1;
  while (i <= arrayNum.length) {
    reverseNum = reverseNum + arrayNum[arrayNum.length - i].toString();
    i++;
  }

  if (minusFlag) {
    reverseNum = "-" + reverseNum;
  }

  return reverseNum;
};

console.log(reverseInteger(-123000));

//if x = 0 ; return 0
//remember minus flag , y/n
//getting absolute value
//while x%10 = 0 then x/10
//loop
//first index to temp , first index = last index , last index = temp
