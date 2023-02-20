const randomNum = Math.floor(Math.random()*10);
console.log('randomNum :>> ', randomNum);

function doTask1(num) {
   return new Promise((resolve)=>{
    setTimeout(()=>{
        if(num%2 === 0 && num!==0){
            resolve("Number is Even")
        }
    },1000);
}) 
}
function doTask2(num) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
         if(num%2 !== 0){
             resolve("Number is Odd")
         }
        },1000);
    }) 
}

function doTask3(num) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
         if(num === 0){
             resolve("Number is Zero")
         }
     },1000);
    }) 
}

function* doByGenerator(task) {
    yield task(randomNum);
}

async function doByAsync(task) {
    const result = await task(randomNum);
    return result;
}

function runGeneratorCode(task){
    const iter = doByGenerator(task);
    iter.next().value.then(result=>console.log('Generator : Result', result));
}

function runAsyncCode(task){
    const res = doByAsync(task);
    res.then(result=>console.log('Async/Await : Result', result));
}

runGeneratorCode(doTask1);
runGeneratorCode(doTask2);
runGeneratorCode(doTask3);

runAsyncCode(doTask1);
runAsyncCode(doTask2);
runAsyncCode(doTask3);