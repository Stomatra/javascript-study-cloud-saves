const nums=[];
nums.push(3);
nums.push(5);
nums.push(8);

let sum=0;
for(const n of nums){
    sum+=n;
}

console.log("nums=",nums);
console.log("sum=",sum);