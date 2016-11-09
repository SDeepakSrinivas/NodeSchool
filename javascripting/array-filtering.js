var nums = [1,2,3,4,5,6,7,8,9,10];
var filtered = nums.filter(function(num) {
if(num%2==0) return num;
});
console.log(filtered);
