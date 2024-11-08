console.log("first");
setTimeout(() => {
    console.log("second");
}, 1000)

console.log("third")

setInterval(()=>{
    console.log("Hello world")
}, 2000)
console.log("I will run before 'Hello world'")