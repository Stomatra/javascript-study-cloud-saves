const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("请输入json:",(answer)=>{
    let obj;
    try {
        obj = JSON.parse(answer);
    } catch (err) {
        console.log("JSON 格式错误");
        rl.close();
        return;
    }
    
    console.log("名字:",obj.name);
    avg=obj.scores.map(Number).reduce((acc,x)=>acc+x,0)/obj.scores.length;
    console.log("平均分:",avg.toFixed(2));

    rl.close();
})