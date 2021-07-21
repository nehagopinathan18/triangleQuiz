

let semiPerimeter = 0;
let a, b, c = 0;
let product = 0;
let area = 0;
var getArea = () => {
    var side1 = document.querySelector(".side1").value;
    var side2 = document.querySelector(".side2").value;
    var side3 = document.querySelector(".side3").value;
    semiPerimeter = (parseInt(side1) + parseInt(side2) + parseInt(side3)) / 2;
    console.log(semiPerimeter);
    a = semiPerimeter - side1;
    b = semiPerimeter - side2;
    c = semiPerimeter - side3;
    
    product = (semiPerimeter) * (a) * (b) * (c);
   
    area = Math.sqrt(product);
    area = area.toFixed(2);
    
    document.querySelector(".output").innerText = "Area = " + area;


    
};


