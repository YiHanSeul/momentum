const quotes = [
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        author: "-Albert Einstein-",
    },
    {
        quote: "Respect your efforts, respect yourself. Self-respect leads to self-discipline. When you have both firmly under your belt, that's real power.",
        author: "-Clint Eastwood-",
    },
    {
        quote: "The results you achieve will be  in direct proportion to the effort you apply",
        author: "-Denis Waitley-",
    },
    {
        quote: "Your dreams will take time. It will take efforts and require dedication and sacrifice. But inthe end it Will be Worth it.",
        author: "-Anurag Prakash Ray-",
    },
    {
        quote: "Nothing worth having was ever achieved without effor.",
        author: "-Theodore Roosevelt-",
    },
    {
        quote: "Success is the sum of small efforts. ",
        author: "-Robert Collier-",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "-Nelson Mandela-",
    },

    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "-Theodore Roosevelt-",
    },
    {
        quote: "Success is not final failure is not fatal: It is the courage to continue that counts.",
        author: "-Winston S. Churchill-",
    },
    {
        quote: "No pain, No gain",
        author: "-Benjamin Franklin-",
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

 quote.innerText=todaysQuote.quote;
 author.innerText=todaysQuote.author;