let addTwoNumbers = (l1, l2) => {
    //given l1 -> 2 4 3
    //given l2 -> 5 6 4
    //reverse order l1  3,4,2 //create stringL1 342
    //reverse order l2  4,6,5 //create stringL2 465
    //sum = Integer.parseInt(stringL1)   +  Integer.parseInt(stringL2) 
    //new Array(sum.tostring)
    //parseInt for each index
    // console.log(l1);
    // console.log(l2)
    
    let i = l1.length-1;
    let j = l2.length-1;
    let stringL1 = '';
    let stringL2 = '';
    let sum  = 0;
    
    while(i>=0){
        stringL1 = stringL1 + l1[i];
        i--;
    }

      while(j>=0){
        stringL2 = stringL2 + l2[j];
        j--
    }

    sum = parseInt(stringL1) + parseInt(stringL2);

    let sumArray = Array.from(sum.toString());

    
    console.log('-- stringL1 : ' + stringL1);
    console.log('-- stringL2 : ' + stringL2);
    console.log('-- sum  : ' + sum);
    console.log('-- sumArray  : ' + sumArray);
    return sumArray;
};

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];

console.log('--- result is : ' + addTwoNumbers(l1,l2));