const quotes = [
  {
    name: "Dr. Suess",
    quote:
      "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams."
  },
  {
    name: "Marilyn Monroe",
    quote:
      "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best."
  },
  {
    name: "Stephen King",
    quote: "Get busy living or get busy dying."
  },
  {
    name: "Mark Caine",
    quote:
      "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."
  }
];

// Targeting

const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  quoteAuthor.innerHTML = quotes[random].name;
}
