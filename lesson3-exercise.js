const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("请输入数字:",(answer)=>{
    const n=Number(answer);
    if(Number.isNaN(n) || n<1){
        console.log("请输入大于等于1的整数");
    }
    else{
        //n=answer
        let sum=0;
        for(let i=0;i<=n;i++){
            sum+=i;
        }
        console.log("1~n的总和:",sum);
    }
    rl.close();
});