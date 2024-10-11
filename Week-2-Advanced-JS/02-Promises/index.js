function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
function callback() {
      console.log("3 seconds have passed");
}
  
setTimeoutPromisified(3000).then(callback);


//Aysn Await syntax....

async function main() {
    await cleanFile("a.txt")
    console.log("Done cleaning file");
 }
 
 main();
