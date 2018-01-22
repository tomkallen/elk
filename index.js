
console.log(h(".mydiv").html())
h(".mydiv")
    .html("Click me")
    .on("click", el => el.toggle("kinky").wait(2000, el => el.kill()))
