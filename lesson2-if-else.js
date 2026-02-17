const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("请输入温度(数字):",(answer)=>{
    const temp=Number(answer);

    if(Number.isNaN(temp)){
        console.log("你输入的不是数字.");
    }
    else if(temp>=35){
        console.log("很热,注意防暑.");
    }
    else if(temp>=25){
        console.log("有点热.");
    }
    else{
        console.log("比较凉快");
    }

    rl.close();
})