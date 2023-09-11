function calculateWordsInString(string) {
    const words = string.split(/\s+/);
    console.log(words.length);
  }
  
  calculateWordsInString("Easy string for count");
  calculateWordsInString("Easy");
  calculateWordsInString("Some string with a triple   space");
  calculateWordsInString("Some?  string, with a triple   space");
  