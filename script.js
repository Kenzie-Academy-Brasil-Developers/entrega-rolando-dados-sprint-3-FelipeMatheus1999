const numberRandom = () => {let number = Math.floor(Math.random() * 6 + 1); return number;}

const twoRandomNumberSum = () => {return numberRandom() + numberRandom();}

const rollingDice = () => {
    let result = [];
    
    for (let i = 0; i < 1000; i++) {
        result.push(twoRandomNumberSum());
    }
    return result;
}

const counter = () => {
    let results = rollingDice();
    let array = [];
    
    for (let i = 2; i < 13; i++) {
        let counter = 0;
        
        for (let j = 0; j < results.length; j++) {
            if (results[j] === i) {
                counter++;
            }
        }
        
        array.push(counter);
    }
    return array;
}

const constructor = () => {
    const array = counter()
    for (let i = 0; i < 11; i++) {
        const graphic = document.querySelector('.graphic');
        const dados = document.createElement('span');
        
        dados.innerText = `${array[i]}`;
        dados.style.height = `${array[i]}px`;
        dados.style.width = '25px';
        dados.style.background = 'rgb(56, 122, 50)';
        graphic.appendChild(dados);
    }
}

constructor();
