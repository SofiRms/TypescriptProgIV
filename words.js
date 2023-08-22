function countWords(sentence) {
    var words = sentence.split(" ");
    return words.length;
}
var sentence = "If you want it you're gonna bleed but it's the price to pay And you're a very sexy girl who's very hard to please You can taste the bright lights but you won't get there for free In the jungle, welcome to the jungle";
var wordCount = countWords(sentence);
console.log("La oraci\u00F3n tiene ".concat(wordCount, " ").concat(wordCount === 1 ? "palabra" : "palabras", "."));
