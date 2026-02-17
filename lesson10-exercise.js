const students = [
  { name: "Tom", scores: [80, 90, 70] },
  { name: "Amy", scores: [100, 88, 95] },
  { name: "Bob", scores: [60, 70, 65] },
];

const avg = (arr) => arr.reduce((acc, x) => acc + x, 0) / arr.length;
const sum=(...nums)=>nums.reduce((acc,x)=>acc+x,0);

let withAvg=[]
for(const {name,scores} of students){
    withAvg.push({
        name:name,
        avg:avg(scores),
    });
}

const name_sorted=[...withAvg].sort((a,b)=>b.avg-a.avg).map((s)=>s.name);

const score_of_Tom=sum(...(students.find((s)=>s.name==="Tom").scores.map(Number)));

console.log("排序后的名字列表:",name_sorted);
console.log("Tom的总分:",score_of_Tom);