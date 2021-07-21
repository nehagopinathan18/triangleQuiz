

let sum = 0;
let root = 0;
let squaredNumber1 = 0;
let squaredNumber2 = 0;
var getRoot = () => {
    var base = document.querySelector(".base").value;
    var height = document.querySelector(".height").value;
    squaredNumber1 = Math.pow(parseInt(base),2);
    squaredNumber2 = Math.pow(parseInt(height), 2);
    sum = squaredNumber1 + squaredNumber2;
    root = Math.sqrt(sum);
    root = root.toFixed(2);
    document.querySelector(".output").innerText = "Hypotenuse = " + root;
    
    
};


