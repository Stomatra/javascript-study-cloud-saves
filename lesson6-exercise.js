const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("请输入一行:",(answer)=>{
    const nums=answer.trim().split(/\s+/);
    const summer=(nums)=>{
        let sum=0;
        for(const num of nums){
            sum+=Number(num);
        }
        return sum;
    }
    console.log("总和是:",summer(nums));

    rl.close();
});