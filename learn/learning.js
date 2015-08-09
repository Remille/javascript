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
    str = "="+str+"=";
    var matches = str.match(new RegExp(".[A-Za-z].","gm"));
    for (var m = 0; m < matches.length; m++){
        var g = matches[m].match(new RegExp("\\+[A-Za-z]\\+","gm"));
        if (g == null) {
            return "false";
        }
    }
    return "true";
}

function CheckNums(num1,num2) { 
    if(num2 === num1){return -1;}
    return (num2 > num1);
}

function TimeConvert(num) { 
    var minutes = num % 60;
    var hour = Math.floor(num / 60);  
    return hour+":"+minutes; 
}

function AlphabetSoup(str) { 
    str = str.split("");
    str = str.sort();
    str = str.join("");
    return str;
}

function ABCheck(str) { 
    var match = str.match(new RegExp(/a.{3}b|b.{3}a/));
    return !(match === null) ; 
}

function VowelCount(str) { 
    var match = str.match(new RegExp(/[aeiou]/gm));
    return match === null? 0:match.length; 
}

function WordCount(str) { 
    var match = str.match(new RegExp(/\S+/g)); 
    return "length" in match? match.length : 0; 
}

function ExOh(str) { 
    var x = str.match(new RegExp(/x/gm));
    x ? x = x.length : x = 0;
    var o = str.match(new RegExp(/o/gm));
    o ? o = o.length : o = 0;
    return x === o;
}

function Palindrome(str) { 
    var r = str.split('').reverse().join('');
    return str === r; 
}
function ArithGeo(arr) { 
    var arith = []; var geo = [];
    for (var i = 1; i < arr.length; i++) {
        arith.push(arr[i] - arr[i-1]);
        geo.push(arr[i]/arr[i-1]);
    }
    // if arith elements all the same, returhn Arithmetic, 
    // else geo elements all the same, return Geometric
    // else return -1
    var arith_sames = 0;
    var geo_sames = 0;
    for (var i = 0; i < arith.length; i++) {
        if (arith[i] === arith[i+1]) {
            arith_sames += 1;
        }
        if (geo[i] === geo[i+1]) {
            geo_sames += 1;
        }
    }

    if (arith_sames === arith.length - 1) {return "Arithmetic";}
    if (geo_sames === geo.length - 1) {return "Geometric";}
    return -1; 
}
