import {Worker} from 'worker_threads';

//spawning a process
new Worker('./thread/workerss.js');

// starting a process is called spwaning

// When a process (the parent) creates a new process (the child), we refer to it as spawning a process.

// This creates a parent-child relationship between the two processes.


// So, spawning a process is the action of creating or launching a new process from an existing one. It doesn't have to be limited to parent-child relationships — it's about the act of starting a new process from an already running process.




// =================================


// Can a Process Exist without a Thread?

// No, a process cannot exist without at least one thread.

// A process needs at least one thread to exist.


// 🧠 Why?
// 🔹 A process is a container:
// It holds the resources needed to run a program — memory, file handles, environment variables, etc.

// But it doesn’t actually execute any code by itself.

// 🔹 A thread is the unit of execution:
// Threads are what actually run code.

// When a process starts, it has at least one thread, usually called the main thread.

// So, a process must have at least one thread to do anything — to execute instructions, run functions, or even sit idle.



// 🧩 Analogy:
// Think of it like this:

// A process is a restaurant (provides space, equipment, supplies).

// A thread is a chef (does the actual cooking).

// Without a chef (thread), the restaurant (process) can’t prepare food (execute code).


// =============================================






// =======
// is nodejs single trhead or multip thread?

// 🧵 Part 1: JavaScript Execution – Single Threaded
// ✅ How it works:
// Node.js executes your JavaScript in one thread using the event loop.

// This thread is responsible for:

// Running functions

// Handling callbacks

// Executing Promise.then(), async/await, etc.


// The event loop allows non-blocking behavior within a single thread.

// ⚠️ Important:
// JS in Node.js does not run in parallel

// Two functions cannot execute simultaneously unless you explicitly use threads (we’ll come to that)


// 🔧 Part 2: libuv – Background Thread Pool (Multi-threaded I/O)
// Node.js is built on libuv, a C/C++ library that:

// Manages the event loop

// Handles asynchronous I/O operations

// libuv uses a thread pool (default: 4 threads) for:

// | Operation Type | Example                                   |
// | -------------- | ----------------------------------------- |
// | File system    | `fs.readFile()`, `fs.writeFile()`         |
// | DNS            | `dns.lookup()`                            |
// | Crypto         | `crypto.pbkdf2()`, `crypto.randomBytes()` |
// | Compression    | `zlib.gzip()`                             |




// These are offloaded to threads so they don’t block the main JS thread.


// 🧠 Part 3: Thread Pool – How Many Threads?

// Default thread pool size: 4 threads

// You can increase it using:



// 🧠 Part 4: Worker Threads – True Multi-threading in Node.js

// Introduced in Node.js v10.5.0, worker_threads module allows you to run JavaScript in multiple threads.

// Use Case:
// Heavy computation (e.g. image processing, data parsing, cryptography)



// 🧠 Part 5: Cluster Module – Multi-process (not multi-thread)
// If you're dealing with multiple CPU cores, Node.js offers the cluster module.

// It spawns multiple processes, not threads

// Each process has its own memory and event loop

// Used to scale servers across cores






// ✅ Final Verdict:
// 🔹 Node.js is single-threaded for JavaScript execution,
// 🔹 Multi-threaded internally for I/O,
// 🔹 Supports true multithreading using worker_threads,
// 🔹 Can be scaled across cores using cluster (multi-process).





// real example Multi-threaded internally for I/O,
// const fs = require('fs');

// console.time('Total');

// for (let i = 1; i <= 4; i++) {
//   fs.readFile(__filename, () => {
//     console.log(`Finished reading file ${i}`);
//   });
// }

// console.timeEnd('Total');
