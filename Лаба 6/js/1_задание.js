const exit_files = [];
let i = 1;
function CalcSquard(a, b) {
    var squard = a * b;
    return squard;
}
function CalcValue() {
    let A = document.getElementById("calc_1").value;
    let B = document.getElementById("calc_2").value;
    if (isNaN(A) || isNaN(B)) {
        mistake = " Данные введены неверно";
        document.getElementById("resultCalc").innerHTML=mistake;
}   else {
    c = CalcSquard(A, B);
    exit_files.push("Площадь " + i + " прямоугольника равна: " + c + "<br>");
    i += 1;
    document.getElementById("resultCalc").innerHTML=exit_files.join("<br>");
}
}