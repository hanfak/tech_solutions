function isAnagram(word1, word2) {
  word1 = normaliseWord(word1);
  word2 = normaliseWord(word2);

  if (isDifferentLength(word1, word2)) {
    return false;
  } else {
    return isWordSame(word1, word2);
  }
}

function sortWord(word){
  return word.split("").sort().join('');
}

function normaliseWord(word){
  return word.toLowerCase();
}

function isDifferentLength(word1, word2){
  return word1.length !== word2.length;
}

function isWordSame(word1, word2){
  var firstWordSorted  = sortWord(word1);
  var secondWordSorted = sortWord(word2);
  return firstWordSorted === secondWordSorted;
}

var a = 'hello';
var b = 'olleHo';
isAnagram(a, b);
