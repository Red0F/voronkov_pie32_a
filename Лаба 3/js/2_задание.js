function CalcValue() {
let a = document.getElementById("calc_1").value;
let b = document.getElementById("calc_2").value;
let c = document.getElementById("calc_3").value;
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("resultCalc").innerHTML=("Данные введены неверно");
} else {
let positive_numbers = 0;
let negative_numbers = 0;
a <= 0 ? negative_numbers ++ : positive_numbers ++;
b <= 0 ? negative_numbers ++ : positive_numbers ++;
c <= 0 ? negative_numbers ++ : positive_numbers ++;
document.getElementById("resultCalc").innerHTML=("Кол-во положительных чисел: " + positive_numbers + " Кол-во отрицательных чисел: " + negative_numbers);
}
}
