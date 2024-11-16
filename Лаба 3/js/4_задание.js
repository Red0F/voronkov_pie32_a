function CalcValue() {
let a = 3.9;
let b = 4.6;
let x = document.getElementById("calc_1").value;
x = parseFloat(x);
let y;
if (isNaN(x)) {
    y = "Данные введены неверно";
    document.getElementById("resultCalc").innerHTML = y;
} else switch(x) {
    case -2:
        y = 2 * ( 1 + (Math.cos(2 * (a * (x ** 2) - b)))) / 2;
        document.getElementById("resultCalc").innerHTML=("2 * cos^2(" + a + " * (" + x + " ** 2) - " + b + ") = " + y);
        break
    case 1:
        y = 2 * ( 1 + (Math.cos(2 * (a * (x ** 2) - b)))) / 2; 
        document.getElementById("resultCalc").innerHTML=("2 * cos^2(" + a + " * (" + x + " ** 2) - " + b + ") = " + y);
        break
    case 4:
        y = 3 * x**2 + b;
        document.getElementById("resultCalc").innerHTML=("3 * " + x + " ** 2 + " + b + " = " + y);
        break
    case 3:
        y =  y = ((x ** 2) + (Math.E ** (a*x))) ** (1/2);
        document.getElementById("resultCalc").innerHTML=("((" + x + " ^ 2) + (e ^ (" + a + "*" + x + "))) ^ 1/2 = " + y);
        break
    default:
        document.getElementById("resultCalc").innerHTML="x не из списка";
}
}