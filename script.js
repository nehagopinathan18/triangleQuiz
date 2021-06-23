

let sum = 0;
var getSum = () => {
    var angle1 = document.querySelector(".angle1").value;
var angle2 = document.querySelector(".angle2").value;
var angle3 = document.querySelector(".angle3").value;
    sum = parseInt(angle1) + parseInt(angle2) + parseInt(angle3);
    if (sum == 180) {
        document.querySelector(".output").innerText = sum + " It is a Triangle";
    } else {
        document.querySelector(".output").innerText = sum + " It is not a Triangle";
    }
    
};


