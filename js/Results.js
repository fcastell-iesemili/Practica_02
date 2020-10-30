function Print_Results() {

    let preg_1;
    let preg_2;
    let preg_3;
    let total;

    //FIRST QUESTION

    if (document.getElementById('post-01').checked == true) {
        preg_1 = 10
    }
    else { preg_1 = 0 }

    //SECOND QUESTION

    if (document.getElementById('post-04').checked == true) {
        preg_2 = 10
    }
    else { preg_2 = 0 }

    //THIRD QUESTION

    if (document.getElementById('post-07').checked == true) {
        preg_3 = 10
    }
    else { preg_3 = 0 }



    total = preg_1 + preg_2 + preg_3;

    document.getElementById("puntuacion").innerHTML = `<h1>${total}</h1>`;

}