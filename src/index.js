module.exports = function check(str, bracketsConfig) {
  const opening = [],
        closing = [];
  bracketsConfig.map((bracket, i) => {
    opening.push(bracket[0]);
    closing.push(bracket[1]);
  });
  str = [...str];
  
  for (let i = 0; i < str.length; i++) {
    
    for (let j = 0; j < opening.length; j++) {
      if (str[i] == opening[j]) {
        if (str[i + 1] == closing[j]) {
          str.splice(i, 2)
          i -= 2; 
        }
      }
    }

  }
  return str.length == 0 ? true : false
}
