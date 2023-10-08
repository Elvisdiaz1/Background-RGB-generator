


const getRandomColorNums = (quantity) => {
    let allRandoms = [];
    for (let index = 0; index < quantity; index++) {
        allRandoms.push(Math.floor(Math.random() * 255));
    };
    return allRandoms;
}

const changeBackgroundColor = () => {
    let allRandoms = getRandomColorNums(3);
    let [first, second, third] = allRandoms;
    // let randomNum = Math.floor(Math.random() * 16777216)
    // let firstNum = Math.floor(Math.random() * 255)
    // let secondNum = Math.floor(Math.random() * 255)
    // let thirdNum = Math.floor(Math.random() * 255)
    // document.body.style.backgroundColor = '#' + randomNum
    document.body.style.backgroundColor = `rgb(${first},${second},${third})`;

    console.log(allRandoms);
}


