const { randomInt }= require("node:crypto");

for(let i=0;i<15;i++){
randomInt(12,(err,m)=>{
    if(err)throw err;
    console.log(`Random number chosen from(0 to $) : ${m}`)
    console.log(m)
    
})

}randomInt(1,2)