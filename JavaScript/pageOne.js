const button = document.querySelector(`.btn`);
const inpOne = document.querySelector(`.inpOne input`)
const inpTwo = document.querySelector(`.inpTwo input`)

const isValid = async (inpOne_, inpTwo_) => {
    if (inpOne_.value == ``) throw new Error(`ERROR! Type your E-mail`)
    if (!/^[a-zA-Z0-9\-\_\.]+@[a-zA-Z]+.[a-zA-Z]{1,10}$/gm.test(inpOne_.value)) throw new Error(`Не корректный ввод`)

    if (inpTwo_.value == ``) throw new Error(`ERROR! Type your Password`)
    if (!/^[0-9]{8,}$/gm.test(inpTwo_.value)) throw new Error(`Только числа или пароль менее 7 чисел`)
}

const redBorderError = (error) => {
    if (error == `ERROR! Type your E-mail`) inpOne.style = `border: 2px solid red; `,
        inpTwo.style = `border: 2px solid red; `;
    if (error == `Не корректный ввод`) inpOne.style = `border: 2px solid red; `;
    if (error == `ERROR! Type your Password`) inpTwo.style = `border: 2px solid red; `;
    if (error == `Только числа или пароль менее 7 чисел`) inpTwo.style = `border: 2px solid red; `;
}

button.addEventListener(`click`, async () => {
    try {
        await isValid(inpOne, inpTwo);

        const obj = {
            email: inpOne.value,
            pwd: inpTwo.value
        }

        const response = await fetch("http://localhost:3000/api/authorize", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        const json = await response.json();

        alert(`You have successfully authorized in the system`);
        console.log(json);
        inpOne.value = ``;
        inpTwo.value = ``;

    } catch (error) {
        redBorderError(error.message)
        alert(error.message)
        inpOne.value = ``;
        inpTwo.value = ``;
    }
})


button.addEventListener(`mouseover`, () => {
    button.style = `border: 2px solid black; background: #01104b; `;
})
button.addEventListener(`mouseout`, () => {
    button.style = `border: none; background: #4C70FF; `;
})


function borderOver(input) {
    input.style = `border: 0.8px solid grey; `;
}

function borderOut(input) {
    input.style = `border: 2px solid black; `;
}


