function digitCheck(str) {
  let validDigits = false;
  str = str.replace(/[^0-9]/gi, '');

  if(str.length === 11 && str.charAt(0) === '1') {
      validDigits = true;
  } else if(str.length === 10) {
    validDigits = true;
  }

  return validDigits;
}

function dashesCheck(str) {
  let validDashes = false;
  const strDigitsOnly = str.replace(/[^0-9]/gi, '');
  const strDashesOnly = str.replace(/[^-]/gi, '');
  const strDigitsAndDashesOnly = str.replace(/[^0-9-]/gi, '');
  let indexTransform = 0;

  if(strDigitsOnly.length === 11) {
    indexTransform = 1;
  }

  if(strDashesOnly.length === 2) {
    if(strDigitsAndDashesOnly.charAt(7 + indexTransform) === '-' && 
    strDigitsAndDashesOnly.charAt(3 + indexTransform) === '-') {
      validDashes = true;
    }
  } else if(strDashesOnly.length === 1) {
    if(strDigitsAndDashesOnly.charAt(6 + indexTransform) === '-') {
      validDashes = true;
    }
  } else if(strDashesOnly.length === 0) {
    validDashes = true;
  }

  return validDashes;
}

function parenthesesCheck(str) {
  let validParentheses = false;
  const strDigitsOnly = str.replace(/[^0-9]/gi, '');
  const strParenthesesOnly = str.replace(/[^()]/gi, '');
  const strDigitsAndParenthesesOnly = str.replace(/[^0-9()]/gi, '');
  let indexTransform = 0;

  if(strDigitsOnly.length === 11) {
    indexTransform = 1;
  }
  
  if(strParenthesesOnly.length === 2) {
    if(strDigitsAndParenthesesOnly.charAt(0 + indexTransform) === '(' && 
    strDigitsAndParenthesesOnly.charAt(4 + indexTransform) === ')') {
      validParentheses = true;
    }
  } else if(strParenthesesOnly.length === 0) {
    validParentheses = true;
  }

  return validParentheses;
}

function telephoneCheck(str) {
  let isVlaid = false
  str = str.trim();

  if(digitCheck(str) && dashesCheck(str) && parenthesesCheck(str)) {
    isVlaid = true;
  }

  return isVlaid;
}

if(telephoneCheck("1 (555) 555-5555")) {
  console.log("YES");
} else {
  console.log("NO");
}
