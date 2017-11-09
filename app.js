const xlsx =require('node-xlsx');

//读取excel:
var list = xlsx.parse('./ceshi.xlsx');

console.log(list[0].data);

