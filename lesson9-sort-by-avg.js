const students = [
  { name: "Tom", scores: [80, 90, 70] },
  { name: "Amy", scores: [100, 88, 95] },
  { name: "Bob", scores: [60, 70, 65] },
];

const avg = (arr) => arr.reduce((acc, x) => acc + x, 0) / arr.length;

const sorted=[...students].sort((a,b)=>avg(b.scores)-avg(a.scores));

console.log(sorted.map((s)=>s.name));