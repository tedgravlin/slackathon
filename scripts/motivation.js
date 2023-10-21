function dailyQuote() {
  const motivationalQuotes = [
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      quote: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      author: "Christian D. Larson",
    },
    {
      quote:
        "The road to success and the road to failure are almost exactly the same.",
      author: "Colin R. Davis",
    },
    {
      quote:
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston S. Churchill",
    },
    {
      quote:
        "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon",
    },
    {
      quote: "Don't let yesterday take up too much of today.",
      author: "Will Rogers",
    },
    {
      quote:
        "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
      author: "Steve Jobs",
    },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    {
      quote:
        "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      author: "Mark Zuckerberg",
    },
    {
      quote:
        "You don't have to be great to start, but you have to start to be great.",
      author: "Zig Ziglar",
    },
    {
      quote:
        "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Unknown",
    },
    {
      quote:
        "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    { quote: "Your limitation—it's only your imagination.", author: "Unknown" },
    {
      quote: "Push yourself because no one else is going to do it for you.",
      author: "Unknown",
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      quote:
        "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
      author: "Vince Lombardi",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer",
    },
    {
      quote: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
    },
    {
      quote: "I find that the harder I work, the more luck I seem to have.",
      author: "Thomas Jefferson",
    },
    {
      quote: "Don't stop when you're tired. Stop when you're done.",
      author: "Unknown",
    },
    {
      quote:
        "The road to success and the road to failure are almost exactly the same.",
      author: "Colin R. Davis",
    },
    {
      quote:
        "I'd rather attempt to do something great and fail than to attempt to do nothing and succeed.",
      author: "Robert H. Schuller",
    },
  ];

  let randomQuote = Math.floor(Math.random() * motivationalQuotes.length);
  let quote = motivationalQuotes[randomQuote].quote;
  let author = motivationalQuotes[randomQuote].author;
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = "- " + author;
}
