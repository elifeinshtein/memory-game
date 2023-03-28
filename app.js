let mycards=[];
let myelemcards=[];
let score=0;
let turns=0;



    function generateRandomColor() {
        const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let randomNum = "";
        for (let i = 0; i < 6; i++) {
            randomNum += hexValues[Math.floor(Math.random() * 16)];
        }
        return `#${randomNum}`
    }

    var grid = document.querySelector(".grid");

    for (var i = 0; i < 50; ++i) {
        grid.innerHTML += '<div onclick="go(this)" class="card"></div> ';

    }



    function generateArrayOfColors() {
        var colors = [];
        for (var i = 0; i < 25; i++) {
            colors.push(generateRandomColor());
        }
        return colors;
    }

    const colorsArray = generateArrayOfColors();
    const cards = document.querySelectorAll(".card");

    console.log(cards);


   

   
    
    
    const paintCards = () => {
        cards.forEach((card, i) => {
            card.style.backgroundColor = colorsArray[i % colorsArray.length];

        });
    };
    paintCards();
   /* cards.addEventListener = ("click",flipCard());*/



 const createDeckOfCards = () => {
        cards.forEach((card, i) => {
            card.classList.add("reverse")

        });
    };
    createDeckOfCards();

    

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    const shuffleButton = document.querySelector(".shuffleButton");
    shuffleButton.onclick = () => {
        shuffle(colorsArray);
        paintCards();
    };

  



function go(elem){
    console.log(elem);
if(mycards.length<2){
    mycards.push(elem.style.backgroundColor);
    myelemcards.push(elem);
    console.log(myelemcards);
    elem.classList.remove('reverse');

    console.log(mycards.length);

    if(mycards.length==2){
if(mycards[0]==mycards[1]){
    score++;
document.getElementById("result").innerHTML= score;
myelemcards[0].remove();
myelemcards[1].remove();
alert("success");
}

else{
    
    setTimeout(function(){myelemcards[0].classList.add('reverse');
    myelemcards[1].classList.add('reverse');},2500)
    

}
turns++;
document.getElementById("turnsCount").innerHTML= turns;
}

if(mycards.length==2){
    setTimeout(function(){ 
        myelemcards=[];
    mycards=[];
    console.log(mycards);},2501)
      }
    }

}

