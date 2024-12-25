function CalcValue() {
    let n = document.getElementById("calc_1").value;
    if (isNaN(n) || n <= 0) {
        exit_files = "Данные введены неверно";
        document.getElementById("resultCalc").innerHTML=exit_files;
} else {
    let N = Math.round(n);
    const array = [];
    if (N >= 1) {
        num_behind_degree = 1;
        for (i = 0; i < N; i++) {
            let c = Math.random() * 101;
            c = Math.round(c * 1000) / 1000
            num_behind_degree = num_behind_degree * (c.toString().split('.')[1]);
            array.push("0." + c.toString().split('.')[1]);
        }
    exit_files =  'Дробные части массива: ' + array.join("<br>") + "<br>" +' Произведение дробных частей: ' + num_behind_degree;
    }
    document.getElementById("resultCalc").innerHTML=exit_files;
} 
}
