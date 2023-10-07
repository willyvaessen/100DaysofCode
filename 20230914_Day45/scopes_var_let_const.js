//  Compare Scopes of the var and let Keywords

function checkScope() {
  let i = 'function scope'; // replaced var with let
  if (true) {
    let i = 'block scope';  //   added let to declare i
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}