let demo = document.querySelector("#demo");
let string = "稻妻神里流—神里绫华 参上";
let n = 0;
demo.innerHTML = string.substring(0, n);
console.log(demo);
let step = ()=>{
    setTimeout(()=>{
        n = n + 1;
        demo.innerHTML = string.substring(0, n);
        if (n < string.length) step();
    }, 400);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
