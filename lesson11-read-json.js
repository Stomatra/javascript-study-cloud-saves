const fs=require("fs");

const text=fs.readFileSync("./students.json","utf-8");
const students=JSON.parse(text);

console.log("学生人数:",students.length);
console.log("第一个学生:",students[0]);