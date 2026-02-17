function isEven(n){
    if(Number.isInteger(n) && n%2===0){
        return true;
    }
    else{
        return false;
    }
}

const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("请输入一行:",(answer)=>{
    const nums=answer.trim().split(/\s+/);
    let integers=[];
    for(const num of nums){
        const n=Number(num);
        if(Number.isInteger(n)){
            integers.push(n);
        }
    }
    let sum=0;
    let n=0;
    for(const int of integers){
        const i=Number(int);
        sum+=i;
        if(isEven(i)){
            n++;
        }
    }

    console.log("整数数组是:",integers);
    console.log("这些整数的总和是:",sum);
    console.log("其中偶数有:",n);

    rl.close();
});