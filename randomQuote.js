var quote = [
    "\"If plan A didn't work out, there are 25 other letters in the alphabet.\" Stay Cool",
    "\"If you don\'t know where you are going, you might wind up someplace else.\" Yogi Berra",
    "\"Don\'t worry about the world coming to an end today. It is already tomorrow in Australia.\" <br/> Charles Schulz",
    "\"The elevator to success is out of order. You\'ll have to use the staircase. One step at a time\". <br/> Joe Girard",
    "\"Age is of no importance unless you\'re a cheese.\" <br/> Billie Burke",
    "\"Always borrow money from a pessimist. He won\'t expect it back\". <br/> -Oscar Wilde",
    "\"Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.\" <br/>   Robert Bloch",
    "\"People often say that motivation doesn\'t last. Well, neither does bathing, that\'s why we recommend it daily. \"<br/>  Zig Ziglar",
    "\"A diamond is merely a lump of coal that did well under pressure\". <br/> Unknown",
    "\"You must learn from the mistakes of others. You can\"t possibly live long enough to make them all yourself.\" <br/> Sam Levenson",
    "\"Why be moody when you can shake ya booty? \"- Unknown",
    "\"All you need in this life is ignorance and confidence, and then success is sure.\" <br/> Mark Twain",
    "\"If you\'re going to be able to look back on something and laugh about it, you might as well laugh about it now.\"  <br/> Marie Osmond",
    "\" When something goes wrong in your life, Just yell, \"PLOT TWIST \" and move on. \" <br/> Mark Twain",
    "\"Think Like a Proton, Always positive\" <br/> Mark Twain",
    "\"If you stumble, make it part of the dance\" <br/> Mark Twain",
];

function newQuote(){
    var randomQuote = Math.floor (Math.random() * quote.length )
    document.getElementById("QuoteDisplay").innerHTML = quote[randomQuote];

    console.log(randomQuote);
    

//$(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);
    $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+quote[randomQuote]).attr('target', '_blank');

    

}