let mycards=[];
let myelemcards=[];
let score=0;
let turns=0;

function generateRandomColor()
{
        const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let randomNum = "";
        for (let i = 0; i < 6; i++) {
            randomNum += hexValues[Math.floor(Math.random() * 16)];
        }
        return `#${randomNum}`
}

    var grid = document.querySelector(".grid");

    for (var i = 0; i < 50; ++i)
    {
        grid.innerHTML += '<div onclick="go(this)" class="card"></div> ';


    }
    
    const cards = document.querySelectorAll(".card");

    const paintCards = () => {
        
            for (var i = 0; i < cards.length; i += 2) {
                cards.style.backgroundColor = generateRandomColor();
            }
        
    };
    paintCards();

 const createDeckOfCards = () => {
        cards.forEach((card, i) => {
            card.classList.add("reverse")

        });
    };
    createDeckOfCards();

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    
    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
    const shuffleButton = document.querySelector(".shuffleButton");
    shuffleButton.onclick = () => {
        shuffle(cards);
        
    
    };

function go(elem)
{
   
    if (mycards.length < 2)
    {
    mycards.push(elem.style.backgroundColor);
    myelemcards.push(elem);
    elem.classList.remove('reverse');
;
        if (mycards.length == 2)
        {
            if (mycards[0] == mycards[1])
            {
                score++;
                document.getElementById("result").innerHTML = score;
                setTimeout(function ()
                {
               
                }, 1000)

                myelemcards.splice(myelemcards[0]);
                myelemcards[0].remove();
                myelemcards.splice(myelemcards[1]);
                myelemcards[1].remove();

}
            
else
{ 
    setTimeout(function(){myelemcards[0].classList.add('reverse');
    myelemcards[1].classList.add('reverse');},2500)  
}
    turns++;
    document.getElementById("turnsCount").innerHTML= turns;
    }

if(mycards.length==2)
{
    setTimeout(function ()
    { 
    myelemcards=[];
    mycards=[];
    console.log(mycards);},2501)
}
    }
    }

