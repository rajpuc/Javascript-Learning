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