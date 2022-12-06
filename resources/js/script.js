window.onload = () => {


/* ---------------Funktion fürs togglen des Sport-Contents------------------------*/

//Allgemeine Funktionen fürs zeigen/verstecken von Buttons/Bilder mit automatischem Scroller (Grid und Flex optionen)

  function hideScrollFlex(e) {
    if (e.style.display === "flex") {
      e.style.display = "none";
    } else {
      e.style.display = "flex";
    }

    window.scrollBy(0, window.innerHeight);
  }

  function hideScrollGrid(e) {
    if (e.style.display === "grid") {
      e.style.display = "none";
    } else {
      e.style.display = "grid";
    }

    window.scrollBy(0, window.innerHeight);
  }

  /*Funktion um alle Sektionen wieder zu verstecken */
  function backToTop(...elements) {
    elements.forEach(function (el) {
      if (el.style.display === "flex" || el.style.display === "grid") {
        return (el.style.display = "none");
      }
    });
  }



//Variablen für Buttons und Bilder generieren

let sportButton = document.getElementById("button1");
let workbutton = document.getElementById("button2");
let codingButton = document.getElementById("button3");
let club = document.getElementById("choice1");
let nati = document.getElementById("choice2");
let nextButton1 = document.getElementById("nextseason1");
let nextButton2 = document.getElementById("nextseason2");
let nextButton3 = document.getElementById("nextseason3");
let nextButton4 = document.getElementById("nextseason4");
let nextButton5 = document.getElementById("nextseason5");
let nextButton6 = document.getElementById("nextseason6");
let nextButton7 = document.getElementById("nextseason7");
let nextButton8 = document.getElementById("nextseason8");
let nextButton9 = document.getElementById("nextseason9");
let backHome = document.getElementById("backhome");


//Variablen für Content-Abschnitte

let options = document.getElementById("options");
let clubPart1 = document.getElementById("part1");
let clubPart2 = document.getElementById("part2");
let clubPart3 = document.getElementById("part3");
let clubPart4 = document.getElementById("part4");
let clubPart5 = document.getElementById("part5");
let clubPart6 = document.getElementById("part6");
let clubPart7 = document.getElementById("part7");
let clubPart8 = document.getElementById("part8");
let clubPart9 = document.getElementById("part9");
let clubPart10 = document.getElementById("part10");

// Klickbarmachen der verschiedenen Buttons/Bilder

sportButton.addEventListener("click", function (){
  hideScrollFlex(options)
});

club.addEventListener("click", function (){
  hideScrollGrid(clubPart1)
});

nextButton1.addEventListener("click", function (){
  hideScrollGrid(clubPart2)
});

nextButton2.addEventListener("click", function (){
  hideScrollGrid(clubPart3)
});

nextButton3.addEventListener("click", function (){
  hideScrollGrid(clubPart4)
});

nextButton4.addEventListener("click", function (){
  hideScrollGrid(clubPart5)
});

nextButton5.addEventListener("click", function (){
  hideScrollGrid(clubPart6)
});

nextButton6.addEventListener("click", function (){
  hideScrollGrid(clubPart7)
});

nextButton7.addEventListener("click", function (){
  hideScrollGrid(clubPart8)
});

nextButton8.addEventListener("click", function (){
  hideScrollGrid(clubPart9)
});

nextButton9.addEventListener("click", function (){
  hideScrollGrid(clubPart10)
});

backHome.addEventListener("click", function (){
  window.scrollTo(0,0)
})




/*------------------------- Funktion fürs Card Flipping ---------------------------*/

let cards = document.querySelectorAll(".card__inner");
cards.forEach(function(card) {
  card.addEventListener("click", function() {
    card.classList.toggle('is-flipped');
  });
});
};

  
