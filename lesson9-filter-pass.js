const students = [
  { name: "Tom", scores: [80, 90, 70] },
  { name: "Amy", scores: [100, 88, 95] },
  { name: "Bob", scores: [40, 50, 55] },
];

const avg = (arr) => arr.reduce((acc, x) => acc + x, 0) / arr.length;

const passed=students.filter((s)=>avg(s.scores)>=60)
console.log(passed.map((s)=>s.name))