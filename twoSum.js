var twoSum = function(nums, target) {
    //brute force ??
    //checking current index through last index
    //for i=0 ; i<nums.length; i++
    //  for j=i+1 ; j<nums.length ; j++
      // if (target == nums[i] + nums[j]) return new Array[i,j]
    
    for(let i=0;i<nums.length;i++){
        for(let j=i+1 ; j<nums.length ; j++){
            if(target == nums[i] + nums[j]){
                return new Array(i,j);
            }
        }
        
    }
    return 0;
    
};

console.log('expected result is [0,1] ' + twoSum([2,7,11,15],9));
console.log('expected result is [1,2] ' + twoSum([3,2,4],6));
console.log('expected result is [0,1] ' + twoSum([3,3],6));