let btn = document.querySelector("#btn");
let text = document.querySelector("#text");
let auth = document.querySelector("#author");

btn.addEventListener("click", function() {
    setTimeout(function() {
        let x= Math.floor(Math.random() * quotes.length)
        text.textContent=quotes[x].quote
        auth.textContent=quotes[x].author
    }, 300)
        fading();
    })


    function fading() {
        $("h3").fadeOut(300);
        $("h3").fadeIn(600);
        
        $("p").fadeOut(300);
        $("p").fadeIn(600);

        $(".big").fadeOut(300);
        $(".big").fadeIn(600);
    }



const quotes=[
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
]



