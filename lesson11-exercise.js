const {sum,avg}=require("./math-utils");
const fs=require("fs");

const text=fs.readFileSync("./students.json","utf-8");
const students=JSON.parse(text);

const withAvg=students.map(({name,scores})=>({
    name:name,
    avg:avg(scores),
}));

console.log("每人的平均分:")
for(const {name,avg} of withAvg){
    console.log(`${name}:${avg.toFixed(2)}`);
}

const avg_class_score=withAvg.reduce((acc,s)=>acc+s.avg,0)/withAvg.length;
console.log("班级平均分:",avg_class_score.toFixed(2));

const json=JSON.stringify(withAvg,null,2);
fs.writeFileSync("./students-with-avg.json",json,"utf-8");