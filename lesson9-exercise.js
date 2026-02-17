const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("请输入json:",(answer)=>{
    let students;
    try {
        students = JSON.parse(answer);
    } catch (err) {
        console.log("JSON 格式错误");
        rl.close();
        return;
    };
    const avg = (arr) => arr.reduce((acc, x) => acc + x, 0) / arr.length;

    const avgscore=students.map((s)=>({name:s.name,score:avg(s.scores)}));
    const avgscore_of_all_class=avgscore.reduce((acc,s)=>acc+s.score,0)/students.length;
    const avgscore_sorted=[...avgscore].sort((a,b)=>b.score-a.score).map((s)=>s.name);
    const avgscore_max_student_name=avgscore_sorted[0];
    
    console.log("每个人的平均分:");
    for(const score of avgscore){
        console.log(`${score.name}: ${score.score.toFixed(2)}`);
    }
    console.log("班级平均分:",avgscore_of_all_class.toFixed(2));
    console.log("平均分最高的学生名字:",avgscore_max_student_name);
    console.log("平均分从高到低输出名字列表:",avgscore_sorted);

    rl.close();
})