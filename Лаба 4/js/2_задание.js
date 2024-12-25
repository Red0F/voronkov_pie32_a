function CalcValue() {
    let price_candy = document.getElementById("calc_1").value;
    if (isNaN(price_candy)) {
        exit_files = "Данные введены неверно";
        document.getElementById("resultCalc").innerHTML=exit_files;
}   else {
    array = [];
    for (i = 1; i < 11; i++) {
        array.push("Цена конфет за " + (Math.round(i * 0.1 * 100)/100) + " кг: " + (Math.round(price_candy * 0.1 * i * 1000)/1000) + ".");
    }
    exit_files = array.join("<br>") + "<br>";
    document.getElementById("resultCalc").innerHTML=exit_files;
}
}
