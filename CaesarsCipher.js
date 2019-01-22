function rot13(str) {
  let encryptedStr = "";

  for(let i = 0; i < str.length; i++) {
    let chr = str.charAt(i);
    
    if(!/[^0-9a-z]/gi.test(chr)) {
      let ecryptedChrCode = (((chr.charCodeAt(0) - 65) + 13) % 26) + 65;
      let encryptedChr = String.fromCharCode(ecryptedChrCode);

      encryptedStr =  encryptedStr + encryptedChr;
    } else {
      encryptedStr =  encryptedStr + chr;
    }
  }


  return encryptedStr;
}

console.log(rot13("SERR PBQR PNZC"));
