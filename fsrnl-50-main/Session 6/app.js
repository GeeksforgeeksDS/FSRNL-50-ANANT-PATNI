let val;

// document object properties

val = document;
console.log(document);

// val = document.head;

// val = document.body;
// val = document.doctype;
// val = document.URL;

// val = document.links;
// val = document.links[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[0].getAttribute("src");

let scripts = document.scripts;
console.log(scripts);

// converting into array
let scriptsArr = Array.from(scripts);
console.log(scriptsArr);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute("src"));
});

console.log(val);
