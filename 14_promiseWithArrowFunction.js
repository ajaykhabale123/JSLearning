
const isSirAvialable = true;
let promiseForNotes = new Promise((resolve, reject)=>{
     if (isSirAvialable) {
        resolve("promise and map.pdf");
    }else{
        reject("Sorry I didn't get time...")
     }
});

promiseForNotes
.then(success=> console.log(success,"I got the notes let me read it....."))
.catch(failure=> console.log(failure,"Are yaar.. kaise teacher hai ye..."))
.finally(()=>console.log("You should always have your notes... "));
