const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuote = [];

const getNewQuote = () => {
    
    const newQuote = apiQuote[Math.floor(Math.random()*apiQuote.length)];
    return newQuote;
}

//loading 
function loading(){
    quoteContainer.hidden = true;
    loader.hidden = false;
}

// complete
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}
// Get quote from API
async function getQuote() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        loading();
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
    } catch (error) {
        //Catch Error Here
        
    }
    return getNewQuote();
}

//getQuote();
newQuoteBtn.addEventListener('click', () => {
    getQuote().then(data => {
        quoteText.innerHTML = data.text;
        authorText.innerHTML = data.author;
    });
    complete();
})

complete();
