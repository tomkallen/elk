h.plugin.foo = function() {
    console.log(this.el)
}
const g = h(".mydiv");
// const g2 = h(".mydiv2")
g.kill()
console.log(h)
