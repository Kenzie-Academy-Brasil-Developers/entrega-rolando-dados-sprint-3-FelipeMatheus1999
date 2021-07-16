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

    // Contando os números
    if (array[0] + array[1] === 2) {
        two++
    }
    
    else if (array[0] + array[1] === 3) {
        three++
    }
    
    else if (array[0] + array[1] === 4) {
        four++
    }
    
    else if (array[0] + array[1] === 5) {
        five++
    }
    
    else if (array[0] + array[1] === 6) {
        six++
    }
    
    else if (array[0] + array[1] === 7) {
        seven++
    }
    
    else if (array[0] + array[1] === 8) {
        eight++
    }
    
    else if (array[0] + array[1] === 9) {
        nine++
    }
    
    else if (array[0] + array[1] === 10) {
        ten++
    }
    
    else if (array[0] + array[1] === 11) {
        eleven++
    }
    
    else if (array[0] + array[1] === 12) {
        twelve++
    }

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


div2.innerText = `${two}`
div3.innerText = `${three}`
div4.innerText = `${four}`
div5.innerText = `${five}`
div6.innerText = `${six}`
div7.innerText = `${seven}`
div8.innerText = `${eight}`
div9.innerText = `${nine}`
div10.innerText = `${ten}`
div11.innerText = `${eleven}`
div12.innerText = `${twelve}`

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

graphic.style.display = 'flex'
graphic.style.alignItems = 'flex-end'


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
