### Ajker topic Node js file system.
- ### First a amra akta nodejs project create korbo : `npm init -y` use kore.Then:
1. ### Write/Create a file:

```Javascript 
//index.js
const fs = require('fs');

//Write/Create A File
async function writeFileSync() {
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>');
    console.log('Successfully Written');
}
(async ()=>{
    await writeFileSync();
})()
```
### ai j `const fs = require('fs');` syntax, ata k r ek vabe likha jai sheta hocce `import fs from 'fs';` aivabe. Adher moddhe first syntax hocce ES5 er syntax and laster ta hocce ES6 er syntax.

2. ### Read a file:
```Javascript
//index.js

const fs = require('fs');

//Write/Create A File
async function writeFileSync() {
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>');
    console.log('Successfully Written');
}

//Read a file 
async function readFileSync() {
    const data = await fs.readFileSync('example.html','utf-8');
    console.log(data);  
}
(async ()=>{
    await readFileSync();
})()
```
3. ### Rename a file:
```javascript
//index.js

const fs = require('fs');

//Write/Create A File
async function writeFileSync() {
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>');
    console.log('Successfully Written');
}

//Read a file 
async function readFileSync() {
    const data = await fs.readFileSync('example.html','utf-8');
    console.log(data);  
}
//Rename a file
async function renameFileSync() {
    await fs.renameSync('example.html','new.html');
    console.log('Rename successfully');
}

(async ()=>{
    await renameFileSync();
})() 
```
4. ### Delete a file:
```javascript
//index.js

const fs = require('fs');

//Write/Create A File
async function writeFileSync() {
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>');
    console.log('Successfully Written');
}

//Read a file 
async function readFileSync() {
    const data = await fs.readFileSync('example.html','utf-8');
    console.log(data);  
}
//Rename a file
async function renameFileSync() {
    await fs.renameSync('example.html','new.html');
    console.log('Rename successfully');
}
//Delete a file 
async function deleteFileSync() {
    await fs.unlinkSync('new.html');
    console.log('Deleted successfully');
}
(async ()=>{
    await deleteFileSync();
})()
```
### Backend er file upload ba delete er somoy  ai method gula diye muloto amra file manage korbo tai eigula shekha. 
### Apni file niye jvabe kaj korben tik akivabe folder niye o kaj korte paren.
1. ### Create a directoy
```Javascript
//index.js

const fs = require('fs');

//Write/Create A File
async function writeFileSync() {
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>');
    console.log('Successfully Written');
}

//Read a file 
async function readFileSync() {
    const data = await fs.readFileSync('example.html','utf-8');
    console.log(data);  
}
//Rename a file
async function renameFileSync() {
    await fs.renameSync('example.html','new.html');
    console.log('Rename successfully');
}
//Delete a file 
async function deleteFileSync() {
    await fs.unlinkSync('new.html');
    console.log('Deleted successfully');
}

//Create a folder
async function createFolderSync() {
    await fs.mkdirSync('new');
    console.log('Folder successfully created.');
}

(async ()=>{
    await createFolderSync();
})()
```
2. ### Delete a directory:
```javascript
//index.js

const fs = require('fs');

//Write/Create A File
async function writeFileSync() {
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>');
    console.log('Successfully Written');
}

//Read a file 
async function readFileSync() {
    const data = await fs.readFileSync('example.html','utf-8');
    console.log(data);  
}
//Rename a file
async function renameFileSync() {
    await fs.renameSync('example.html','new.html');
    console.log('Rename successfully');
}
//Delete a file 
async function deleteFileSync() {
    await fs.unlinkSync('new.html');
    console.log('Deleted successfully');
}

//Create a folder
async function createFolderSync() {
    await fs.mkdirSync('new');
    console.log('Folder successfully created.');
}

//Delete a folder
async function deleteFolderSync() {
    await fs.rmdirSync('new');
    console.log('Folder successfully deleted.');
}

(async ()=>{
    await deleteFolderSync();
})()
```
3. ### rename a directory
```javascript
//index.js

const fs = require('fs');

//Write/Create A File
async function writeFileSync() {
    await fs.writeFileSync('example.html','<h1>Hello World!</h1>');
    console.log('Successfully Written');
}

//Read a file 
async function readFileSync() {
    const data = await fs.readFileSync('example.html','utf-8');
    console.log(data);  
}
//Rename a file
async function renameFileSync() {
    await fs.renameSync('example.html','new.html');
    console.log('Rename successfully');
}
//Delete a file 
async function deleteFileSync() {
    await fs.unlinkSync('new.html');
    console.log('Deleted successfully');
}

//Create a folder
async function createFolderSync() {
    await fs.mkdirSync('new');
    console.log('Folder successfully created.');
}

//Delete a folder
async function deleteFolderSync() {
    await fs.rmdirSync('new');
    console.log('Folder successfully deleted.');
}
//Rename a folder
async function ranmeFolderSync() {
    await fs.renameSync('new','new2');
    console.log('Folder successfully renamed.');
}

(async ()=>{
    await ranmeFolderSync();
})()
```