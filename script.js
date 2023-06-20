function threeSum(arr, target) {
// write your code here
  while(target>0){
  arr.push(target%2);
  target= parseInt(target/2);
}
arr.reverse();
}

module.exports = threeSum;
