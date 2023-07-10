const { html } = require("./base");

// $1 $2 $3 <- Retrovisores \1

// console.log(html.match(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g));
console.log(
  html.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, "$1haha $3 ahahh $4")
);
