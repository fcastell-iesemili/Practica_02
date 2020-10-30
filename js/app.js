function quizz_json() {
    fetch("/data/data.json")
        .then(result => result.json())
        .then(data => {
            let content = document.querySelector('.container');
            for (let quizz of data.preguntes) {
                content.innerHTML += `
                    <div id="border">
                        <div class="row"> 
                            <div id="title_quizz" class="col">
                                <h2> <u> Question ${quizz.id}: ${quizz.question}</u> </h2>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div id="img_quizz" class="col">
                                <img src="${quizz.img}" width="500px" height="300px">
                            </div>
                        </div>

                        <div id="choose" class="row" class="btn-group btn-group-toggle" data-toggle="buttons">
                        
                            <div id="resposta_quizz" class="col">
                                <label>
                                    <input type="radio" id="post-${quizz.types_id[0]}"> ${quizz.resposta[0].text} </input>
                                </label>
                            </div>

                            <div id="resposta_quizz" class="col">
                                <label>
                                    <input type="radio" id="post-${quizz.types_id[1]}"> ${quizz.resposta[1].text} </input>
                                </label>
                            </div>

                            <div id="resposta_quizz" class="col">
                                <label>
                                    <input type="radio" id="post-${quizz.types_id[2]}"> ${quizz.resposta[2].text} </input>
                                </label>
                            </div>
                        </div>
                    </div>
                `
            }
        });
}

quizz_json();