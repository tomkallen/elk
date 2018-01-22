
console.log(h(".mydiv").html())
h(".mydiv")
    .html("Click me")
    .on("click", el => el.toggleClass("secondclass"))
