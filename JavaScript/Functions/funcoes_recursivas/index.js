// Uma função recursiva é uma função que se chama
function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
}

recursiva(0);
