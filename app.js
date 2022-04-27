const set = document.querySelector("input");

const se = document.querySelector(".sec span");

set.addEventListener("keyup", (e) => {
    if (e.key === "Enter"){
        let gj = set.value;
        se.innerText = gj
        const inter = setInterval(() => se.innerText = `${(gj--)-1}`,1000)
        const chk1 = setTimeout(() => {clearInterval(inter);se.innerText = `stop`},gj*1000);
        }
    });