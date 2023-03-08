const button = document.querySelector(`.btn`);
const inpOne = document.querySelector(`.inpOne input`)
const inpTwo = document.querySelector(`.inpTwo input`)
const inpThree = document.querySelector(`.inpThree input`)


button.addEventListener(`click`, () => {
    try {

        if (inpOne.value == ``) throw new Error(`ERROR! Type your E-mail`)
        if (!/^[a-zA-Z0-9\-\_\.]+@[a-zA-Z]+.[a-zA-Z]{1,10}$/gm.test(inpOne.value)) throw new Error(`Не корректный ввод`)

        if (inpTwo.value == ``) throw new Error(`ERROR! Type your Password`)
        if (!/^[0-9]{8,}$/gm.test(inpTwo.value)) throw new Error(`Только числа или пароль менее 7 чисел`)

        if (inpTwo.value != inpThree.value) throw new Error(`Не совпадает`)

        alert(`You have successfully authorized in the system`);

    } catch (error) {
        if (error.message == `ERROR! Type your E-mail`) inpOne.style = `border: 2px solid red;`,
            inpTwo.style = `border: 2px solid red;`,
            inpThree.style = `border: 2px solid red;`;
        if (error.message == `Не корректный ввод`) inpOne.style = `border: 2px solid red;`;
        if (error.message == `ERROR! Type your Password`) inpTwo.style = `border: 2px solid red; `;
        if (error.message == `Только числа или пароль менее 7 чисел`) inpTwo.style = `border: 2px solid red; `;
        if (error.message == `Не совпадает`) inpTwo.style = `border: 2px solid red; `,
            inpThree.style = `border: 2px solid red;`;

        alert(error.message)
    }
})

button.addEventListener(`mouseover`, () => {
    button.style = `border: 2px solid black;`;
})
button.addEventListener(`mouseout`, () => {
    button.style = `border: none`;
})

inpOne.addEventListener(`mouseover`, () => {
    inpOne.style = `border: 0.8px solid grey;`;
})
inpOne.addEventListener(`mouseout`, () => {
    inpOne.style = `border: 2px solid black;`;
})

inpTwo.addEventListener(`mouseover`, () => {
    inpTwo.style = `border: 0.8px solid grey;`;
})
inpTwo.addEventListener(`mouseout`, () => {
    inpTwo.style = `border: 2px solid black;`;
})

inpThree.addEventListener(`mouseover`, () => {
    inpThree.style = `border: 0.8px solid grey;`;
})
inpThree.addEventListener(`mouseout`, () => {
    inpThree.style = `border: 2px solid black;`;
})



