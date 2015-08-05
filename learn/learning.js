function FirstReverse(str) { 
    // returns reverse string str
    const len = str.length - 1;
    var test = '';
    for (var x = len; x >= 0; x--) {
        test += str.charAt(x);
    }
    return test;
}

function FirstFactorial(num) {
    // returns factorial of num
    var prod = 1;
    if (num <= 0) {return 0;}
    for (var x = num; x > 0; x--) {
        prod *= x;
    }
    return prod;
}

function LetterChanges(str) {
    // takes str, shifts letter right i.e. a=>b; f=>g
    // then it capitalizes all vowels 
    var modStr = "";
    //shift letters right, use key code
    //z = 122; a = 97
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        if (char >= 97 && char <= 122) {
            if (char == 122) {char = 97;}
            else {char += 1;}
        }

        modStr += String.fromCharCode(char);
    }

    // capitalize vowels
    modStr = modStr.replace(new RegExp('[aeiou]','gm'), function (match) {return match.toUpperCase()});
    return modStr;
}

function SimpleAdding(num) {
    // returns sum of numbers from 1 to num
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;         
}

function LongestWord(sen) { 

  // code goes here
  // using regexps again
  var big;
  var wordList = sen.match(new RegExp('[\\w\\d]+','gm'));
  for (var i = 0; i < wordList.length; i++) {
    if (wordList[i].length > big.length) {
      big = wordList[i];
    }
  }
  return big; 
}

function LetterCapitalize(str) { 

  // code goes here
  //rip lsit of words, and just capitalize each first letter
  var wordList = str.match(new RegExp('\\w+','g'));
  var newWord;
  for (var i = 0; i < wordList.length; i++) {
    var word = wordList[i];
    word = word[0].toUpperCase() + word.substring(1,word.length);
    newWord += word + ' ';
  }
  return newWord; 
         
}

function SimpleSymbols(str) { 
  var matches = str.match(new RegExp(".[A-Za-z].","gm"));
  for (var m = 0; m < matches.length; m++){
    var g = matches[m].match(new RegExp("\\+[A-Za-z]\\+","gm"));
    if (g == null) {
      return "false";
      }
  }
  return "true";
         
}
