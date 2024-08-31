let display = document.querySelector("input");

let currDis = "";


// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if(e.target.innerhtml == "=") {
//             currDis = eval(currDis);
//             document.querySelector("input")
//             console.log(e.target)
//         }
//     })
// });


let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {

        const num = parseFloat(display.value);

        if(e.target.innerHTML == "=") {
            currDis = eval(currDis);
            display.value = currDis;
        }

        else if(e.target.innerHTML == "C") {
            currDis = "";
            display.value = currDis;
        }

        
        else if(e.target.innerHTML == "DEL") {
            currDis = currDis.slice(0, -1);
            display.value = currDis;
        }

        
        else if(e.target.innerHTML == "√x") {
            if (num >= 0) {
                currDis = Math.sqrt(num);
                display.value = currDis;
            }
        }

        else if(e.target.innerHTML == "∛x") {
            if (num >= 0) {
                currDis = Math.cbrt(num);
                display.value = currDis;
            }
        }

        else if(e.target.innerHTML == "OFF") {
           currDis = "";
           display.value = currDis;
        }


        else {
            console.log(e.target)
            currDis = currDis + e.target.innerHTML;
            display.value = currDis;

        }

    })
})



