import {ItcCustomSelect} from './classSelect';
const select2 = new ItcCustomSelect('#select-2', {
    name: 'key', // значение атрибута name у кнопки
    targetValue: 'a', // значение по умолчанию
    options: [['a', 'A'],['b', 'B'],['c', 'C'],['d', 'D'],['e', 'E'],['f', 'F'],['g', 'G'],['h', 'H'],['i', 'I'],['j', 'J'],['k', 'K'],['l', 'L'],['m', 'M'],['n', 'N'],['o', 'O'],['p', 'P'],['q', 'Q'],['r', 'R'],['s', 'S'],['t', 'T'],['u', 'U'],['v', 'V'],['w', 'W'],['x', 'X'],['y', 'Y'],['z', 'Z'],['0', '0'],['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9']],
  });

// const refs = {
//   btnToggleEl: document.querySelector('.itc-select__toggle'), 
//   // optionEl: document.querySelector('.itc-select__option'),
// }


// export function onSelected(){
//   if (select2.selectedIndex = 0) {
//     refs.btnToggleEl.backgroundColor  = 'red';
//   }
// }
// onSelected();
