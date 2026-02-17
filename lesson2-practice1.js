const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("请输入数字:",(answer)=>{
    const temp=Number(answer);
    if(Number.isNaN(temp)){
        console.log("写入的不是数字.");
    }
    else if(temp>=0 && temp<=17){
        console.log("未成年");
    }
    else if(temp>17 && temp<=64){
        console.log("成年人");
    }
    else if(temp>64){
        console.log("老年人");
    }
    else{
        console.log("其他");
    }
    
    rl.close();
});