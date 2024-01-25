// here is promise method in which we do a setTimeOut mehod and then we do a resolve method & reject method
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    
    console.log("Resolved after 2 seconds");
    reject(new Error("Error or p1"));
    
    
  }, 2000);// set time 2second, after 2 second it will print the rejected method
  
});

p1.catch(error =>{
    console.log(error.message)//here we show only message of error of p1 we are not showing error of p1

  //here we make new p2 promise agian we give error message in p2
  let p2 = new Promise((resolve, reject) =>{
   setTimeout(()=>{
     //we give a reject error message in p2
     reject(new Error("Error of p2"));
   },4000);// time 4 second after 4 second it will print the error message of p2
    
  })
  return p2;// here we return p2 promise because now we want error of p2
}).catch((error)=>{
 
  console.log(error.message) //here we show error of p2
  console.log("Error is handled");
})
