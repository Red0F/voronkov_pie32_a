function CalcValue() {
let a = 1.3;
let b = 2.5;
let x = document.getElementById("calc_1").value;
x = parseFloat(x);
let y;
if (isNaN(x)) {
    y = "Данные введены неверно"
    document.getElementById("resultCalc").innerHTML = y;
} else if (x <= -2) {
    y = 2 * ( 1 + (Math.cos(2 * (a * (x ** 2) - b)))) / 2;
    document.getElementById("resultCalc").innerHTML = ("2 * cos^2(" + a + " * (" + x + " ** 2) - " + b + ") = " + y);
}
else if (x > 3) {
    y = 3 * x**2 + b;
    document.getElementById("resultCalc").innerHTML = ("3 * " + x + " ** 2 + " + b + " = " + y);
}
else if (-2 < x <= 3) {
    y = ((x ** 2) + (Math.E ** (a*x))) ** (1/2);
    document.getElementById("resultCalc").innerHTML = ("((" + x + " ^ 2) + (e ^ (" + a + "*" + x + "))) ^ 1/2 = " + y);
}
}
