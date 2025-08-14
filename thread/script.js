import {Worker} from 'worker_threads';

//spawning a process
new Worker('./thread/workerss.js');

// starting a process is called spwaning

// When a process (the parent) creates a new process (the child), we refer to it as spawning a process.

// This creates a parent-child relationship between the two processes.


// So, spawning a process is the action of creating or launching a new process from an existing one. It doesn't have to be limited to parent-child relationships — it's about the act of starting a new process from an already running process.












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

