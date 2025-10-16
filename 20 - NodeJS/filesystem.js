const fsModule = require("fs");

setTimeout(function(){
    // read file
    // synchronously reading file
    try{
        const data_sync = fsModule.readFileSync("./Notes.txt");
        console.log("Sync File Read Successfully :",data_sync);
    }
    catch(err){
        console.error("Error Reading file :", err);
    }

    // asynchronously reading file
    const data_async = fsModule.readFile("./Notes.txt", function(err, data_async){
        if(err){
            console.error("Error Reading File :", err);
        }
        else console.log("ASync File Read Successfully :",data_async);
    });
}, 0);


setTimeout(function(){
    // copy file
    // synchronous copy of file
    try{
        fsModule.copyFileSync("./Notes.txt", "./sync_copy.txt");
        console.log("Sync File Copied Successfully");
    }
    catch(err){
        console.error("Error copying file :", err);
    }

    // asynchronous copy of file
    fsModule.copyFile("./Notes.txt", "async_copy.txt", function(err){
        if(err){
            console.error("Error copying File :", err);
        }
        else console.log("Async File Copied Successfully");
    });
}, 1000);


setTimeout(function(){
    // write file
    // synchronously writing to a file
    try{
        fsModule.writeFileSync("./sync_copy.txt", "This is new Sync Content");
        console.log("Sync File Written Successfully");
    }
    catch(err){
        console.error("Error writing file :", err);
    }

    // asynchronous copy of file
    fsModule.writeFile("./async_copy.txt", "This is new ASync Content", function(err){
        if(err){
            console.error("Error Writing File :", err);
        }
        else console.log("Async File Written Successfully");
    });
}, 10000);


setTimeout(function(){
    // append file
    // synchronously appending to a file
    try{
        fsModule.appendFileSync("./sync_copy.txt", "This is Added Sync Content");
        console.log("Sync File Appended Successfully");
    }
    catch(err){
        console.error("Error Appending file :", err);
    }

    // asynchronous appending to a file
    fsModule.appendFile("async_copy.txt", "This is Added ASync Content", function(err){
        if(err){
            console.error("Error Appending File :", err);
        }
        else console.log("Async File Appended Successfully");
    });
}, 15000);

setTimeout(function(){
    // delete file
    // synchronous deletion of file
    try{
        fsModule.unlinkSync("./sync_copy.txt");
        console.log("sync_copy.txt Deleted Successfully");
    }
    catch{
        console.error("Error Deleting File");
    }
    // asynchronous deletion of file
    fsModule.unlink("./async_copy.txt", function(err){
        if(err){
            console.log("Error Deleting File :", err);
        }
        else console.log("async_copy.txt File Deleted Successfully");
    })
}, 25000);
