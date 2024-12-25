function CalcValue() {
let a = document.getElementById("calc_1").value;
let b = document.getElementById("calc_2").value;
let c;
a = parseFloat(a);
b = parseFloat(b);
if (isNaN(a) || isNaN(b)) {
    c = "Данные введены неверно"
    document.getElementById("resultCalc").innerHTML = c;
} else if (a >= 0 || b <= -2) {
        c = true;
    } else {
        c = false;
    }
document.getElementById("resultCalc").innerHTML=c;
}
