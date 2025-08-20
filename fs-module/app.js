import fs from "node:fs";

import fss from "node:fs/promises";


// console.log(fs);


// let contentBuffer= fs.readFileSync('./fs-module/sadad.tex')
// console.dir(contentBuffer)

// // return buffer
// contentBuffer= fs.readFileSync('./fs-module/sadad.tex')

// console.log('contentBuffer',contentBuffer.toString())



// let content= fs.readFileSync('./fs-module/sadad.tex','utf-8')
// console.log('content',content)


// // return void. use callback for read file
// fs.readFile('./fs-module/sadad.tex',(error,data)=>{
//     console.log("data",data)  
//     let content=data.toString()
//     console.log(content);
// })


// console.log("fss",fss)


// return promose
// const filecontent=fss.readFile('./fs-module/sadad.tex').then((res,rej)=>{
//     let content =res.toString();
//     console.log("res",res)
//     console.log("rej",rej)

//     console.log("content",content)
// })

let i=0;
const interval=setInterval(()=>{
    console.log(i++)
    if(i==50){
        clearInterval(interval)
    }
},300)

// const filecontent=await fss.readFile('./fs-module/sadad.tex')
const filecontent=await fss.readFile('./fs-module/sadad.tex','utf-8')

console.log(filecontent.toString());

console.log("fileend")
