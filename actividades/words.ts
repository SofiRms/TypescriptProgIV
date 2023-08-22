function countWords(sentence: string): number {
    const words = sentence.split(" ");
    return words.length;
  }
  
  const sentence = "There's a calm before the storm. I know, it's been comin' for some time. When it's over, so they say.It'll rain a sunny day"
  const wordCount: number = countWords(sentence);
  
  console.log(`La oración tiene ${wordCount} ${wordCount === 1 ? "palabra" : "palabras"}.`);
  