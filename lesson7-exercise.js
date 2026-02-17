const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("请输入一行:",(answer)=>{
    const parts=answer.trim().split(/\s+/);
    const numbers=parts.map(Number).filter((x)=>!Number.isNaN(x));
    const sum=numbers.reduce((acc,x)=>acc+x,0);
    const positiveCount=numbers.filter((x)=>x>0).length;
    const max=numbers.reduce((acc,x)=>Math.max(acc,x),-Infinity);
    console.log("numbers:",numbers);
    console.log("sum:",sum);
    console.log("positiveCount:",positiveCount);
    console.log("max",max);

    rl.close();
});