const fs = require("fs");

// console.log(fs)
// fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log("file cannot be read")
//         console.log(err);
//     }else{
//         console.log(data)
//     }
// })
// let data;
// try{
//     data = fs.readFileSync("lecture.txt",{encoding:"utf-8"})
//     console.log(data)
// }catch(err){
//     console.log(err)
// }
// console.log("Buy Guys")

// fs.writeFile("./lecture.txt", "this is my first file",(err)=>{
//     if(err){
//         console.log("cannot write file into the file");
//         console.log(err);
//     }else{
//         console.log("data has been written")
//     }
// })
// try{
//     fs.writeFileSync("./lecture.txt","this is kp's first file");
//     console.log("Data has been written")
// }catch(err){
// console.log(err)
// }

    fs.appendFile("./.gitignore","\nnode_modules",(err)=>{
            if(err){
                console.log("cannot write file into the file");
                console.log(err);
            }else{
                console.log("data has been written")
            }
        }
    )
