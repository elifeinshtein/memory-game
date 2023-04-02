
let mycards = [];
let myelemcards = [];
let score = 0;
let turns = 0;

function generateRandomColor() {
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let randomNum = "";
    for (let i = 0; i < 6; i++) {
        randomNum += hexValues[Math.floor(Math.random() * 16)];
    }
    return `#${randomNum}`
}

function shuffle(array) {
    let curr = array.length, rand;

    while (curr != 0) {
        rand = Math.floor(Math.random() * curr);
        curr--;
        [array[curr], array[rand]] = [array[rand], array[curr]];
    }

    return array;
}

const shuffleButton = document.querySelector(".shuffleButton");

shuffleButton.onclick = function () {
    const cards = document.querySelectorAll(".card");
    const shuffledCards = shuffle(Array.from(cards));

    const container = document.querySelector(".grid");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    shuffledCards.forEach(card => {
        container.appendChild(card);
    });
};
const grid = document.querySelector('.grid');
for (var i = 0; i < 50; ++i) {
    grid.innerHTML += '<div onclick="go(this)" class="card"></div> ';
    const cards = document.querySelectorAll(".card");
    cards[i].classList.add("reverse")
}

const cards = document.querySelectorAll(".card");
for (var i = 0; i < cards.length; i += 2) {
    const color = generateRandomColor();
    cards[i].style.backgroundColor = color;
    cards[i + 1].style.backgroundColor = color;
}


function go(elem) {
    console.log(elem);
    if (mycards.length < 2) {
        mycards.push(elem.style.backgroundColor);
        myelemcards.push(elem);
        console.log(myelemcards);
        elem.classList.remove('reverse');

        console.log(mycards.length);

        if (mycards.length == 2) {
            if (mycards[0] == mycards[1]) {
                score++;
                document.getElementById("result").innerHTML = score;
                myelemcards[0].remove();
                myelemcards[1].remove();

            }

            else {

                setTimeout(function () {
                    myelemcards[0].classList.add('reverse');
                    myelemcards[1].classList.add('reverse');
                }, 2500)


            }
            turns++;
            document.getElementById("turnsCount").innerHTML = turns;
        }

        if (mycards.length == 2) {
            setTimeout(function () {
                myelemcards = [];
                mycards = [];
                console.log(mycards);
            }, 2501)
        }
    }

}
