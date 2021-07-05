let palindromeString = prompt('Enter any string');

function checkString(string) {
  for (let i = 0; i < string.length/2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      console.log('Sai');
      return;
    }
  }
  console.log('Dung');
}

checkString(palindromeString);