function reverseStr(str) {
  let strReversed = "";

  for(let i = str.length - 1; i >= 0; i--) {
      strReversed = strReversed + str.charAt(i);
  }

  return strReversed;
}

function palindrome(str) {
  let isPalindrome = false;
  
  str = str.toLowerCase();
  str = str.trim();
  str = str.replace(/[^0-9a-z]/gi, '');

  const strLength = str.length;
  let half = Math.floor(strLength / 2);

  const sub1 = str.substring(0, half);

  if(strLength % 2 !== 0) {
    half++;
  }

  const sub2 = str.substring(half, strLength);
  const sub2Reversed = reverseStr(sub2);

  if(sub1 === sub2Reversed) {
    isPalindrome = true;
  }

  return isPalindrome;
}



if(palindrome("racecar")) {
  console.log("YES");
} else {
  console.log("NO");
}
