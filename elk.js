function h(el) {
    return new DOM(el);
}

class DOM {
    constructor(el) {
        this.el = document.querySelector(el);
    }

    html(val) {
        return val
            ? ((this.el.innerHTML = val), this)
            : this.el.innerHTML;
    }

    text(val) {
        return val
            ? ((this.el.textContent = val), this)
            : this.el.textContent;
    }

    on(event, cb) {
        return this.el.addEventListener(event, () => cb(this)),
        this;
    }

    toggle(cl) {
        let classes = DOM.classes(this.el);
        const index = classes.indexOf(cl)
        if (index >= 0) {
            classes = classes.filter((c, i) => i !== index)
        } else {
            classes.push(cl);
        }
        this.el.className = classes.join(" ");
        return this
    }

    wait(t, cb) {
        return setTimeout(() => cb(this), t),
        this;
    }

    addClass(cl) {
        return this.el.classList.add(cl),
        this;
    }

    removeClass(cl) {
        return this.el.classList.remove(cl),
        this;
    }

    kill(el = this.el) {
        if (DOM._isNode(el)) {
            el.remove();
        } else {
            return this;
        }
    }

    static _isNode(el) {
        return el && (el.nodeType === 1 || el.nodeType === 11);
    }

    static classes(el) {
        return el.className.split(" ");
    }
}
