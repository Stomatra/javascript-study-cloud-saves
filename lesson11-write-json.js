const fs=require("fs");

const data={
    updatedAt:new Date().toISOString(),
    list:[1,2,3],
};

const json=JSON.stringify(data,null,2);
fs.writeFileSync("./output.json",json,"utf-8");

console.log("写入完成:output.json")