/*
* exemple qui démontre la thérorie (maths) des catégories
* PF (programmation fonctionnelle)
*/
function upperCaseLetter(c) {
  let code = c.charCodeAt(0)
  // lower case letter?
  if(code >= 97 && code <= 122) {
    // uppercase it!
    code = code - 32
  }
  return String.fromCharCode(code)
}

// f sur une chaine complète
function stringToUpperCase(mapperFn, str) {
  return [ ...str ].map(mapperFn).join('')
}

console.log(
  stringToUpperCase(upperCaseLetter, 'Hi what\'s your name?')
);
