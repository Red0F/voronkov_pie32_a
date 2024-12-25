let Current_Stage = 1;
ends = ["Концовка: Успешный побег", "Концовка: Вы были пойманы охранниками и отправлены в одиночную комнату", "Концовка: Сосед предал вас", 
"Концовка: Взаимопощь. Друзья соседа помогли вам выбраться", "Концовка: Вы прочитали книгу и вас очень понравилась эта книга. Вы решили вместо побега читать и дальше в тюрьме книги",
 "Концовка: Вас поймали за попыткой прокопать тоннель", "Концовка: Вас побили и отправили в одиночку", "Концовка: У вас не получилось сбежать", 
 "Концовка: Вы сломали вентиляцию и упали прямо перед охранниками"];
 check_1 = false;
 check_2 = true;


function StartNovella() {
    document.getElementById("start").style.display = "none";
    document.getElementById("first-button").style.display = "flex";
    document.getElementById("second-button").style.display = "flex";
    document.getElementById("third-button").style.display = "flex";
    Choice_History();
}
function End_History(N) {
    document.getElementById("start").innerHTML = "Начать сначало";
    document.getElementById("output").innerHTML = ends[N];
    document.getElementById("output-image").scr = "";
    Current_Stage = 0;
}

function Next_Stage(Previos_Stage) {
    document.getElementById("start").style.display = "block";
    document.getElementById("start").innerHTML = "Продолжить";
    document.getElementById("first-button").style.display = "none";
    document.getElementById("second-button").style.display = "none";
    document.getElementById("third-button").style.display = "none";
    document.getElementById("output-image").src = "";
    switch(Current_Stage) {
        case 1:
            if (Previos_Stage == 1) {
                document.getElementById("output").innerHTML = "Вы осмотриваете камеру";
                
            }
            else if (Previos_Stage == 2) {
                End_History(4);
            }
            else if (Previos_Stage == 3) {
                document.getElementById("output").innerHTML = "Вы поговорили с соседом и узнали о его намарениях сбежать из тюрьмы. Далее вы осмотрели комнату";
            } 
            break
        case 2:
            if (Previos_Stage == 1) {
                End_History(5);
            }
            else if (Previos_Stage == 2) {
                document.getElementById("output").innerHTML = "Вы исследовали трещину, она оказалась бесполезной и вы начали разговор с соседом";
            }
            else if (Previos_Stage == 3) {
                document.getElementById("output").innerHTML = "Вернуться к соседу";
            } 
            break
        case 3:
            if (Previos_Stage == 1) {
                document.getElementById("output").innerHTML = "Вы согласились";
            }
            else if (Previos_Stage == 2) {
                document.getElementById("output").innerHTML = "Вы согласились помочь, но вы готовы предать своего соседа при первой же возможности";
            }
            else if (Previos_Stage == 3) {
                 End_History(6);
            } 
            break
        case 4:
            if (Previos_Stage == 1) {
                document.getElementById("output").innerHTML = "Вы пришли в столовую";
            }
            else if (Previos_Stage == 2) {
                document.getElementById("output").innerHTML = "Охранники быстро устранили ваши шумиху и отправили в столовую";
                check_1 = true;
            }
            else if (Previos_Stage == 3) {
                document.getElementById("output").innerHTML = "Вам посоветовали спросить помощи у заключенного по кличке смотрящий в столовке";
            } 
            break
        case 5:
            if (Previos_Stage == 1) {
                End_History(6);
            }
            else if (Previos_Stage == 2) {
                document.getElementById("output").innerHTML = "Вы рассказали охранникам о заключённом и началась шумиха. Вы воспользовались моментом и украли нож";
            }
            else if (Previos_Stage == 3 && check_1 == true) {
                document.getElementById("output").innerHTML = "Вы вернулись в камеру и узнали, что пока вы отвлекали внимание охранников ваш сосед достал нож";
            } 
            else if (Previos_Stage == 3 && check_1 == false) {
                End_History(7);
            } 
            break
        case 6:
            if (Previos_Stage == 1) {
                End_History(1);
            }
            else if (Previos_Stage == 2) {
                End_History(1);
            }
            else if (Previos_Stage == 3) {
                document.getElementById("output").innerHTML = "Вы спрятали нож и вернулись в камеру";
            } 
            break
        case 7:
            if (Previos_Stage == 1) {
                document.getElementById("output").innerHTML = "Вы ушли и оставили соседа";
            }
            else if (Previos_Stage == 2) {
                document.getElementById("output").innerHTML = "Вы вытащили соседа и ушли из заварушки вместе";
                check_2 = true;
            }
            else if (Previos_Stage == 3) {
                End_History(7);
            } 
            break
        case 8:
            if (Previos_Stage == 1) {
                End_History(8);
            }
            else if (Previos_Stage == 2) {
                document.getElementById("output").innerHTML = "Вы оказались на улице";
            }
            else if (Previos_Stage == 3 && check_2 == false) {
                document.getElementById("output").innerHTML = "Вы оставили соседа и сами полезли вправо по вентеляции и оказались на улице";
            } 
            else if (Previos_Stage == 3 && check_2 == true) {
                End_History(2);
            } 
            break
        case 9:
            if (Previos_Stage == 1) {
                End_History(1);
            }
            else if (Previos_Stage == 2) {
                document.getElementById("output").innerHTML = "Вы украли машину";
            }
            else if (Previos_Stage == 3 && check_2 == true) {
                End_History(1);
            } 
            else if (Previos_Stage == 3 && check_2 == false) {
                End_History(3);
            } 
            break
        case 10:
            if (Previos_Stage == 1) {
                End_History(0);
            }
            else if (Previos_Stage == 2) {
                End_History(1);
            }
            else if (Previos_Stage == 3) {
                End_History(0);
            }
            break
    }
    Current_Stage += 1;
}

function Choice_History() {
    switch(Current_Stage) {
        case 1:    
            document.getElementById("output").innerHTML = "Вы просыпаетесь в своей камере. На стене висят фотографии, которые вы собрали за годы заключения. В углу стоит стол, на котором лежит ваша единственная книга.";
            document.getElementById("output-image").src = "img/1.jpg";
            document.getElementById("first-button").innerHTML = "Осмотреть камеру";
            document.getElementById("second-button").innerHTML = "Прочитать книгу";
            document.getElementById("third-button").innerHTML = "Поговорить с соседом по камере";
            break
        case 2:
            document.getElementById("output").innerHTML = "Вы внимательно осматриваете камеру. На полу вы замечаете трещину, а на столе — старую ложку.";
            document.getElementById("output-image").src = "img/2.jpg";
            document.getElementById("first-button").innerHTML = "Попробовать использовать ложку для копания";
            document.getElementById("second-button").innerHTML = "Исследовать трещину на полу";
            document.getElementById("third-button").innerHTML = "Вернуться к соседу";
            break
        case 3:
            document.getElementById("output").innerHTML = "Сосед по камере, старый заключенный, рассказывает вам о своем плане побега. Он предлагает вам объединиться.";
            document.getElementById("output-image").src = "img/3.jpg";
            document.getElementById("first-button").innerHTML = "Принять его предложение";
            document.getElementById("second-button").innerHTML = "Отказаться и действовать в одиночку";
            document.getElementById("third-button").innerHTML = "Агрессивно отказаться";
            break
        case 4:
            document.getElementById("output").innerHTML = "Вы объединились с соседом. Он говорит, что нужны инструменты открыть вентиляцию и найти способ отвлечь охрану.   ";
            document.getElementById("output-image").src = "img/4.jpg";
            document.getElementById("first-button").innerHTML = "Пойти в столовую за инструментами";
            document.getElementById("second-button").innerHTML = "Попробовать отвлечь охрану, устроив шум";
            document.getElementById("third-button").innerHTML = "Найти других заключенных для помощи";
            break
        case 5:
            document.getElementById("output").innerHTML = "В столовой много заключенных и охранников. Вы видите, как один из заключенных прячет что-то под столом.";
            document.getElementById("output-image").src = "img/5.jpg";
            document.getElementById("first-button").innerHTML = "Подойти к заключенному и спросить, что он прячет";
            document.getElementById("second-button").innerHTML = "Попробовать украсть что-то из кухни";
            document.getElementById("third-button").innerHTML = "Вернуться в камеру";
            break
        case 6:
            document.getElementById("output").innerHTML = "У вас успешно получилось украсть нож из кухни. Теперь у вас есть инструмент для побега.";
            document.getElementById("output-image").src = "img/6.jpg";
            document.getElementById("first-button").innerHTML = "Вернуться в камеру";
            document.getElementById("second-button").innerHTML = "Пойти к вентеляции и попытаться сбежать";
            document.getElementById("third-button").innerHTML = "Спрятать нож и ждать подходящего момента";
            break
        case 7:
            document.getElementById("output").innerHTML = "Вы решаете устроить шум, чтобы отвлечь охрану. Сосед спровоцировал драку и заключенные начинают кричать и драться.";
            document.getElementById("output-image").src = "img/7.jpg";
            document.getElementById("first-button").innerHTML = "Оставить соседа и уйти";
            document.getElementById("second-button").innerHTML = "Помочь соседу выбраться из передряги";
            document.getElementById("third-button").innerHTML = "Подождать соседа";
            break
        case 8:
            document.getElementById("output").innerHTML = "Вы находите вентиляционное отверстие в коридоре. Это может быть вашим шансом на свободу.";
            document.getElementById("output-image").src = "img/8.jpg";
            document.getElementById("first-button").innerHTML = "Ползти в вентеляции вправо";
            document.getElementById("second-button").innerHTML = "Ползти в вентеляции влево";
            document.getElementById("third-button").innerHTML = "Отправить соседа в вентеляцию";
            break
        case 9:
            document.getElementById("output").innerHTML = "Вы выбрались на улицу, но вокруг много охранников. Вам нужно решить, как действовать дальше.";
            document.getElementById("output-image").src = "img/9.jpg";
            document.getElementById("first-button").innerHTML = "Бежать в лес";
            document.getElementById("second-button").innerHTML = "Попробовать украсть машину";
            document.getElementById("third-button").innerHTML = "Открыть дверь соседу";
            break
        case 10:
            document.getElementById("output").innerHTML = "Вы украли машину и пытаетесь оторваться от погони, но появился на пути перекрёсток. Куда повернёте?";
            document.getElementById("output-image").src = "img/10.jpg";
            document.getElementById("first-button").innerHTML = "Влево";
            document.getElementById("second-button").innerHTML = "Прямо";
            document.getElementById("third-button").innerHTML = "Вправо";
            break
    }
}

function First_Button() {
    Next_Stage(1);
}

function Second_Button() {
    Next_Stage(2);
}

function Third_Button() {
    Next_Stage(3);
}