"use strict";
const send={}
const abcresult= loadfile("./module-wrapper-function.js/abc.js")
// const vds="ff"
// console.log("krisha")


// const sum =()=>{
//     console.log("sum")
// }




// const vm=require("vm")
// var asdas=55;


// // vm.runInNewContext("var asttt=55; console.log('fffff'); ");

// vm.runInThisContext("var as=55; console.log('gggg'); ");



// eval("var attts=55; console.log('kkkk'); console.log(asdas);  debugger; ")
 

// console.log("eeeeeeeee");




console.log('abcresult',abcresult)

function loadfile(path){
    const fs=require('fs');
    const vs =require("vm");
  
    const fileread=fs.readFileSync(path).toString();
  
    return (function(send){
        console.log("send",send)
       const fileresult= vs.runInNewContext(fileread,{send})
            console.log('fileresult',fileresult);
            return send;
    })(send);
    
 
}






// | Feature                               | `runInThisContext()`                               | `runInNewContext()`                                |
// | ------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
// | **Scope**                             | Runs in same global context, different local scope | Runs in a completely isolated global + local scope |
// | **Access to current local variables** | ❌ No                                               | ❌ No                                               |
// | **Access to current global objects**  | ✅ Yes (shared `global`, `console`, etc.)           | ❌ No (unless passed in explicitly)                 |
// | **Sandboxing**                        | ❌ Limited                                          | ✅ Full sandbox via context object                  |
// | **Use case**                          | Like `eval` at global/module level                 | Isolated code execution (e.g., untrusted code)     |







// | Feature / Use Case          | `vm` Module                  | `worker_threads` Module              | `cluster` Module                                      |
// | --------------------------- | ---------------------------- | ------------------------------------ | ----------------------------------------------------- |
// | **Purpose**                 | Run JS in sandboxed scope    | Run JS in parallel threads (workers) | Run Node.js processes in parallel                     |
// | **Isolation**               | Same process, isolated scope | Separate threads, own memory         | Separate processes, full isolation                    |
// | **Parallelism**             | ❌ No                         | ✅ Yes                                | ✅ Yes                                                 |
// | **Communication**           | Shared context (custom)      | Message passing via `postMessage`    | Message passing via IPC (Inter-Process Communication) |
// | **Global state shared**     | Yes (can restrict manually)  | No (by default)                      | No                                                    |
// | **Runs in same process?**   | ✅ Yes                        | ✅ Yes                                | ❌ No (each cluster is a process)                      |
// | **Use with untrusted code** | ✅ (if sandboxed well)        | ❌ Not ideal                          | ❌ Not ideal                                           |
// | **Best for**                | Sandboxing/eval/config REPL  | CPU-bound JS code                    | Scaling I/O servers (e.g., Express)                   |
