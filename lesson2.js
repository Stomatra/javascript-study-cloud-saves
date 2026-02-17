const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("请输入温度(数字):",(answer)=>{
    const temp=Number(answer);
    console.log("你输入的温度是:",temp);

    rl.close();
})