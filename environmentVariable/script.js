import fs from 'fs';
import process from 'process'
const filedata=fs.readFileSync('./environmentVariable/abcd').toString();

const environmentVariable=process.env
filedata.split("\r\n").forEach((item)=>{

    process.env[item.split("=")[0]]=item.split("=")[1] 
})

console.log(environmentVariable)




// dotenv package are also using this type of stagegy. 

//.env is not any special type of file. 

// from .env not auto read file. there we also do same implemationlike this above