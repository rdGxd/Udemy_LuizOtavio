const { html } = require("./base");

//  <*>    *     </*>   <*>    *      </*>
console.log(html);

// Greedy
console.log(html.match(/<.+>.+<\/.+>/g));

// Non-greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g));
