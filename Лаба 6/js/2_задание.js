const matrix = ['', '', 0, 0];

function NewMassiv() {
    const new_matrix = [];
    let lines = document.getElementById("calc_1").value;
    let columns = document.getElementById("calc_2").value;
    if (!isNaN(lines) && !isNaN(columns) && lines >= 0 && columns >= 0 && (lines % 2 == 0)) {
    for (i = 0; i < lines; i++) {
        const line = [];
        for (j = 0; j < columns; j++) {
            value = Math.random() * 101;
            value = Math.round(value);
            line.push(value);
        }
        new_matrix.push(line);
    }
    matrix[0] = new_matrix.join("<br>");
    matrix[1] = new_matrix
    matrix[2] = lines;
    matrix[3] = columns;
} else if (columns <= 0  || lines <= 0 || (lines % 2 == 1)) {
    document.getElementById("resultCalc").innerHTML="Ошибка при введении размеров матрицы";
} else if (isNaN(lines) || isNaN(columns)) {
    document.getElementById("resultCalc").innerHTML="Вводить нужна только числа";
}
}

function ChangeMassiv() {
    let matros
    const first_part = [];
    const second_part = [];
    for (i = 0; i < matrix[1].length; i++) {
        if (i < matrix[1].length / 2) {
        first_part.push(matrix[1][i]);
        } else {
        second_part.push(matrix[1][i]);
        }
    }
    const changed_matrix = second_part.concat(first_part);
    document.getElementById("resultCalc").innerHTML=changed_matrix.join("<br>");
}
function GetMassiv() {
    document.getElementById("resultCalc").innerHTML=matrix[0];
}
