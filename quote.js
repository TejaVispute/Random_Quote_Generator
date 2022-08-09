const quotes = [
    {
      quote: "Do not pitty the dead, Harry. Piry the living, and",
      author: "Albus Dumbldore",
    },
    {
      quote: "It is impossible to manufacture or imitate love",
      author: "Horace Slughorn",
    },
    {
      quote:
        "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
      author: "Luna Lovegood",
    },
    {
      quote:
        "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
      author: "Sirius Black",
    },
    {
      quote:
        "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
      author: "Arthur Weasley",
    },
    {
      quote: "Every human life is worth the same, and worth saving.",
      author: "Kingsley Shacklebolt",
    },
    {
      quote: "One day I will find the right words, and they will be simple",
      author: "Jack Kerouac, The Dharma Bums",
    },
    {
      quote:
        "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
      author: "Albus Dumbledore",
    },
    {
      quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
      author: "Dobby",
    },
    {
      quote: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
      author: "Robert Frost",
    },
    {
      quote: "I can shake off everything as I write; my sorrows disappear, my courage is reborn.",
      author: "Anne Frank",
    },
  ];


  const Quotebutton = document.querySelector('#quotebtn');

  function generate(){

    let SourceLength = quotes.length;
    
    //getting new random number to display quote
    let randomNumber = Math.floor(Math.random() * SourceLength); 
    
    //set a new quote 
    let newquote = quotes[randomNumber].quote;
    let newquoteauthor = quotes[randomNumber].author;


    let quotecontainer = document.getElementById('quotecontainer');quotecontainer.innerHTML =` <p>${newquote}</p> <p id="quoteGenius"> Author:-${newquoteauthor}</p>`;

  };