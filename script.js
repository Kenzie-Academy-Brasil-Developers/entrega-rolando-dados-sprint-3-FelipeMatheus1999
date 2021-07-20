const numberRandom = () => {
    let number = Math.floor(Math.random() * 6 + 1);
    return number;
}

// Variáveis
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;
let eight = 0;
let nine = 0;
let ten = 0;
let eleven = 0;
let twelve = 0;
let array = [];
let sums = [];
let count = 0;


for (let i = 0; i < 1000; i++) {
    array.push(numberRandom());
    array.push(numberRandom());
    
    // Tirando o número zero
    if (array[0] === 0) {
        array[0] = 1
    }

    else if (array[1] === 0) {
        array[1] = 1
    }

    sums.push(array[0] + array[1]);

    array.shift()
    array.shift()
}


const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');
const div8 = document.createElement('div');
const div9 = document.createElement('div');
const div10 = document.createElement('div');
const div11 = document.createElement('div');
const div12 = document.createElement('div');


for (let i = 0; i < sums.length; i++) {

    if (sums[i] === 2) {
        div2.innerText++
        two++
    }

    else if (sums[i] === 3) {
        div3.innerText++
        three++
    }

    else if (sums[i] === 4) {
        div4.innerText++
        four++
    }

    else if (sums[i] === 5) {
        div5.innerText++
        five++
    }

    else if (sums[i] === 6) {
        div6.innerText++
        six++
    }

    else if (sums[i] === 7) {
        div7.innerText++
        seven++
    }

    else if (sums[i] === 8) {
        div8.innerText++
        eight++
    }

    else if (sums[i] === 9) {
        div9.innerText++
        nine++
    }

    else if (sums[i] === 10) {
        div10.innerText++
        ten++
    }

    else if (sums[i] === 11) {
        div11.innerText++
        eleven++
    }

    else if (sums[i] === 12) {
        div12.innerText++
        twelve++
    }
}


div2.style.width = '25px'
div2.style.height = `${two}px`
div2.style.background = 'rgb(56, 122, 50)'

div3.style.width = '25px'
div3.style.height = `${three}px`
div3.style.background = 'rgb(56, 122, 50)'

div4.style.width = '25px'
div4.style.height = `${four}px`
div4.style.background = 'rgb(56, 122, 50)'

div5.style.width = '25px'
div5.style.height = `${five}px`
div5.style.background = 'rgb(56, 122, 50)'

div6.style.width = '25px'
div6.style.height = `${six}px`
div6.style.background = 'rgb(56, 122, 50)'

div7.style.width = '25px'
div7.style.height = `${seven}px`
div7.style.background = 'rgb(56, 122, 50)'

div8.style.width = '25px'
div8.style.height = `${eight}px`
div8.style.background = 'rgb(56, 122, 50)'

div9.style.width = '25px'
div9.style.height = `${nine}px`
div9.style.background = 'rgb(56, 122, 50)'

div10.style.width = '25px'
div10.style.height = `${ten}px`
div10.style.background = 'rgb(56, 122, 50)'

div11.style.width = '25px'
div11.style.height = `${eleven}px`
div11.style.background = 'rgb(56, 122, 50)'

div12.style.width = '25px'
div12.style.height = `${twelve}px`
div12.style.background = 'rgb(56, 122, 50)'


const graphic = document.querySelector('.graphic');


graphic.appendChild(div2)
graphic.appendChild(div3)
graphic.appendChild(div4)
graphic.appendChild(div5)
graphic.appendChild(div6)
graphic.appendChild(div7)
graphic.appendChild(div8)
graphic.appendChild(div9)
graphic.appendChild(div10)
graphic.appendChild(div11)
graphic.appendChild(div12)
