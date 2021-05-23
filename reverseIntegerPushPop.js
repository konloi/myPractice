let reverseInteger = (x) => {
  let pop, push;
  let rev = 0;
  while(x!=0){
      pop = x%10;
      x = x/10;
      if((rev >= Number.MAX_VALUE/10) && pop > 7 ) return 0;
      if((rev <= Number.MAX_VALUE/10) && pop < -8 ) return 0;
      rev = rev*10 + pop;
  }

  return x;
};

console.log(reverseInteger(12345));

//pop last digit of x using %
// x/ = 10 

//push = rev*10 +  pop;
//rev = push;