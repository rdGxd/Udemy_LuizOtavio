function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números.");
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma(1, "a"));
} catch (error) {
  // Não é interessante informar o ERROR pro usuário final
  console.log("Alguma coisa mais amigável pro usuário");
  // console.log(error);
}
