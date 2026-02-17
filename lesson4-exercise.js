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

rl.question("请输入数字:",(answer)=>{
    const num=Number(answer);
    if(isEven(num)){
        console.log("是偶数");
    }
    else{
        console.log("不是偶数");
    }

    rl.close();
});