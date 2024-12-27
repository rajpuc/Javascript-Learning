## **Ajkhe amra ja porbo:**
 - ### Nodejs Familiarization
 - ### Creating Nodejs server
 - ### Status Code
 - ### Get Post PATCH PUT DELETE
 - ### request headers

### Nodejs JS er akta runtime. Jtar maddhome amra servr side a o JS run korate pari.


### A **runtime** is the environment in which a program is executed. It provides the necessary tools, libraries, and infrastructure for your code to run and interact with the underlying operating system and hardware.

---

### Key Responsibilities of a Runtime:

1. **Executing Code:**  
   A runtime executes the program’s instructions, whether they’re compiled machine code, interpreted scripts, or just-in-time compiled code.

2. **Memory Management:**  
   Handles allocation and deallocation of memory during program execution.  
   Example: Garbage collection in JavaScript or Java.

3. **Abstraction Layer:**  
   Provides APIs or tools that allow your code to interact with the operating system and hardware (e.g., file system, network).

4. **Error Handling:**  
   Manages runtime errors and exceptions that occur during execution.  
   Example: Catching unhandled exceptions in Python or Node.js.

5. **Environment Management:**  
   Sets up the environment needed for the program to run (e.g., loading libraries, managing dependencies).

---

### Examples of Runtimes:
- **JavaScript Runtimes:** Node.js, Deno, Web Browsers.
- **Python Runtime:** Python interpreter.
- **Java Runtime Environment (JRE):** Runs Java applications via the JVM.
- **.NET Runtime:** CLR (Common Language Runtime) for .NET applications.

---

### Runtime vs. Compiler:
- **Runtime:** Executes the code. It provides tools and libraries to run the program dynamically.  
  Example: Node.js runs JavaScript code by interpreting and just-in-time compiling it.

- **Compiler:** Translates source code into machine code ahead of execution. The runtime may still be needed for certain tasks, like managing memory.  
  Example: A C++ program compiled into an executable binary still relies on the C++ runtime library (`libstdc++`).

---

### Analogy:
Think of a runtime as a **kitchen** where you cook a recipe:
- The **kitchen** (runtime) provides the tools, ingredients, and environment you need to prepare a meal.
- The **recipe** (code) contains the instructions for what to do.
- The runtime ensures you can follow the recipe by managing resources like utensils and the stove.

---
A **compiler** can be thought of as a **meal prep service** in the kitchen analogy: 

---

### **Compiler Analogy:**
The **compiler** is like a service or process that takes your raw recipe (source code) and prepares all the ingredients (machine code) in advance, so they are ready to cook (execute) without further translation.

---

### Comparison of Compiler and Runtime in the Kitchen Analogy:
| **Concept**           | **Analogy**                                                                                       |
|-----------------------|---------------------------------------------------------------------------------------------------|
| **Source Code**       | A recipe written in a language you understand (like English).                                     |
| **Compiler**          | A prep chef who converts the recipe into step-by-step instructions (machine-readable instructions).|
| **Output (Binary)**   | Pre-made, ready-to-cook meal kits (machine code).                                                 |
| **Runtime**           | The kitchen where the cooking happens, providing tools (e.g., stove, utensils) to make the dish.  |
| **Execution**         | Cooking the meal in the kitchen based on the prepped ingredients (or instructions).               |

---

### Key Differences in the Analogy:
- A **runtime** allows you to cook directly from the recipe (interpreted or just-in-time compiled execution).  
  Example: Running JavaScript directly in Node.js without preparing anything beforehand.

- A **compiler** prepares everything (translates the recipe into precise measurements and instructions). Once this preparation is complete, you can cook the meal without referencing the original recipe.  
  Example: A C++ compiler generates a standalone executable that doesn’t need the original source code to run.

---

This analogy helps show how the **compiler** is about preparation, while the **runtime** is about execution. Let me know if you'd like further clarification!
---
---
### ami chat gpt k ask korechi: can a clear what is actually compiler do? just translate a prorgram to machine code? they do not run the code?

Yes, you are correct! A **compiler** primarily **translates a program written in a high-level language into machine code** (or an intermediate code like bytecode) that can be understood and executed by the computer's hardware. 

A **compiler does not directly run the code**—it produces a standalone executable or output file that you can run later.

---

### What Does a Compiler Do?

1. **Translation**  
   - It translates source code (e.g., C++, Java) into **machine code** (binary instructions) or an intermediate representation (e.g., bytecode for Java).

2. **Error Checking**  
   - During the compilation process, it checks the code for syntax errors, type mismatches, and other issues.  
   Example: Missing semicolons, undeclared variables.

3. **Optimization**  
   - Compilers often optimize the code to make it faster or use less memory.  
   Example: Removing redundant calculations or rearranging code for better performance.

4. **Produces Output**  
   - The compiler generates an **executable file** (like `.exe` for Windows) or intermediate bytecode (like `.class` files in Java).  

---

### Key Point:
- **Compilers DO NOT run the program.**  
   Instead, they prepare a file that can be executed by the machine or a runtime environment later.

---

### Example:
#### For C++:
1. You write a program (`program.cpp`):
   ```cpp
   #include <iostream>
   using namespace std;
   int main() {
       cout << "Hello, World!";
       return 0;
   }
   ```

2. The **compiler** (e.g., `g++`) converts this into machine code:
   ```bash
   g++ program.cpp -o program
   ```

3. This produces an executable file (`program`) that you can run:
   ```bash
   ./program
   ```

---

### Compiler vs. Runtime:
- **Compiler:** Prepares the program for execution (translation step).  
- **Runtime:** Actually executes the compiled program, handling tasks like memory allocation, I/O, and error handling.

Would you like to see how a runtime interacts with compiled code?
---
The difference between a **runtime** and a **compiler** lies in their purpose and functionality:

---

### 1. **Runtime Environment (e.g., Node.js)**  
A runtime environment provides the necessary tools and libraries to execute code written in a particular programming language.  

**Key Characteristics:**
- **Execution:** Runs the code directly, without converting it into a different language.
- **Environment Support:** Includes features such as memory management, I/O handling, and APIs specific to the language (e.g., Node.js APIs for file system, HTTP, etc.).
- **Dynamic Execution:** Executes code "on the fly" (interpreted or just-in-time compiled).

In Node.js:
- The **V8 engine** inside Node.js takes JavaScript code and directly executes it by compiling it just-in-time (JIT) into machine code.
- Node.js also provides additional features like `fs` (file system), `http` (server), and `os` modules to work with the operating system.

---

### 2. **Compiler**
A compiler translates source code written in a high-level programming language into a lower-level language (e.g., machine code or bytecode) **before execution.**  

**Key Characteristics:**
- **Translation:** Converts code into a standalone binary that can be executed independently of the original source code.
- **Performance:** Pre-compiled code typically runs faster because it’s already in machine-readable form.
- **One-Time Process:** Code is compiled once and can be executed multiple times.

Example:
- A C++ program is compiled into machine code using a C++ compiler like `g++`. The output is a binary executable file that can be run directly on a computer.

---

### Comparison Table

| **Aspect**              | **Runtime Environment (e.g., Node.js)**               | **Compiler (e.g., g++, javac)**                |
|-------------------------|-------------------------------------------------------|-----------------------------------------------|
| **Execution**           | Executes code directly (interpreted or JIT compiled). | Translates code into machine code for execution. |
| **Dependency**          | Needs the runtime installed (e.g., Node.js).          | Produces standalone executables (no dependencies). |
| **Performance**         | Slower due to real-time interpretation/compilation.   | Faster because code is pre-compiled.          |
| **Error Detection**     | Errors are caught at runtime.                         | Errors are caught during compilation.         |
| **Flexibility**         | Easier to work with dynamic features like eval.       | Limited to statically defined structures.     |

---

### Why Node.js is a Runtime
Node.js is a **runtime environment** because it:
1. Executes JavaScript code directly using the V8 engine (via JIT compilation).
2. Provides built-in APIs and tools for server-side tasks (e.g., working with files, networking).

It does not "compile" JavaScript into a standalone binary file for distribution, which is what a compiler would do.

---
### akta server er kaj hocce req newa, request ta niye response patano j request diyeche tar kache. So ai j request-responser j process ta jehetu commnication, Toh amra already jani jkono communication kicu protocol menei hoi. Jemon most 2ta famous protocol hocee http and https. nodejs er ekta nijossho library ache jta amader k already req-response er jabotiyo kaj korer jonnno amader akta http module diye dei.Jta aikhane use kore server create korbo:

```javascript
//index.js
const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("Hello Rajesh")
})
server.listen(5050,()=>{
    console.log("Server is running on 5050");
})
```
```javascript
// index.js

const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("<h1>Hello Rajesh</h1>")
})
server.listen(5050,()=>{
    console.log("Server is running on 5050");
})
```
## Different url er jonno different response dite hobe:
```javascript
// index.js

const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Home Page");
    }
    if(req.url==='/login'){
        res.end("login Page");
    }
    if(req.url==='/contact'){
        res.end("Contact Page");
    }
})
server.listen(5050,()=>{
    console.log("Server is running on 5050");
})
```
### Amra server k 5 doroner request dite pari:
   1. GET
   2. POST
   3. PATCH
   4. PUT 
   5. DELETE
```javascript
// index.js

const http = require('http');
const server = http.createServer((req,res)=>{
    let method = req.method;
    if(method === 'GET'){
        console.log("Get Request");
    }
    if(method === 'POST'){
        console.log("Post Request");
    }
    if(method === 'PATCH'){
        console.log("Patch Request");
    }
    if(method === 'PUT'){
        console.log("Put Request");
    }
})
server.listen(5050,()=>{
    console.log("Server is running on 5050");
});
```
### Famous code er meaning hocce:
   - ### 200 -> OK
   - ### 404 -> Not found
   - ### 500 -> Server er sathe communicate korte giye kono karone server k pan nai ata k internal server error.
```javascript
// index.js

const http = require('http');
const server = http.createServer((req,res)=>{
    let method = req.method;
    if(method === 'GET'){
        console.log("Get Request");
        console.log(res.statusCode);
    }
    if(method === 'POST'){
        console.log("Post Request");
    }
    if(method === 'PATCH'){
        console.log("Patch Request");
    }
    if(method === 'PUT'){
        console.log("Put Request");
    }
})
server.listen(5050,()=>{
    console.log("Server is running on 5050");
})

```
### Amra chaile status code nijer tekhe diye dite pari:
```javascript
// index.js

const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode = 401;
    res.end("Hello OStad");
})
server.listen(5050,()=>{
    console.log("Server is running on 5050");
})
```
### Request header jodi ami simply boli, dorun apni akta data pataben server a ba server tekhe data read korte caicen, akhon ai j "apni" ta k? shetai define kore hocce header. Jemon apni chiti pataite caile jemon prerok & prapok likhe den, Prerok & prapok e hocce header. 
### Header set korer jonno:
```javascript
// index.js

const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode = 201;
    res.setHeader("MERN-BATCH","N EIGHT"); 
    res.end("Hello OStad");
})
server.listen(5050,()=>{
    console.log("Server is running on 5050");
})
```
