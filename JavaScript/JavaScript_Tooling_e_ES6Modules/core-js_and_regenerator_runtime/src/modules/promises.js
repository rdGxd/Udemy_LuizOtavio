// Resolvendo problemas de regenerator run time e promises em navegadores antigos
function promessas() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hey, sou a promise.");
      resolve();
    }, 2000);
  });
}

export default async () => {
  await promessas();
  console.log("terminou");
};