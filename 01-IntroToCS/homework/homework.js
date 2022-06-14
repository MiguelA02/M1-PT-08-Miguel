'use strict'

function BinarioADecimal(num) {
  let acc = 0;
  num = num.split('').reverse();
  for(let i = 0; i < num.length;i++){
    acc += parseInt(num[i]) * Math.pow(2,i);
  }
  return acc;

}

function DecimalABinario(num) {
  let array = [];
  while(num >= 1){
    array.push(Math.floor(num%2));
    num = num/2;
  }
  return array.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}