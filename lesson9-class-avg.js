const students = [
  { name: "Tom", scores: [80, 90, 70] },
  { name: "Amy", scores: [100, 88, 95] },
  { name: "Bob", scores: [60, 70, 65] },
];

const avg = (arr) => arr.reduce((acc, x) => acc + x, 0) / arr.length;

const classAvg=students.reduce((acc,s)=>acc+avg(s.scores),0)/students.length;

console.log(classAvg);