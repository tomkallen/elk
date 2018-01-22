function h(el) {
    return new DOM(el);
}

class DOM {
    constructor(el) {
        this.el = Array.from(document.querySelectorAll(el));
    }

    html(val) {
        if (val) {
            this.el.forEach(e => e.innerHTML = val)
            return this;
        } else {
            return this.el[this.el.length - 1].innerHTML;
        }
    }

    text(val) {
        if (val) {
            this.el.forEach(e => e.textContent = val)
            return this;
        } else {
            return this.el[this.el.length - 1].textContent;
        }
    }

    on(event, cb) {
        this.el.forEach(el => el.addEventListener(event, () => cb(this)))
        return this;
    }

    hasClass(cl) {
        return this.el.filter(el => el.classList.contains(el)).length;
    }

    setClass(cl) {
        this.el.forEach(el => el.className = cl);
        return this;
    }

    toggleClass(cl) {
        this.el.forEach(el => el.classList.toggle(cl))
        return this;
    }

    wait(t, cb) {
        return setTimeout(() => cb(this), t),
        this;
    }

    addClass(cl) {
        this.el.forEach(el => el.classList.add(cl))
        return this;
    }

    removeClass(cl) {
        this.el.forEach(el => el.classList.remove(cl))
        return this;
    }

    kill(el = this.el) {
        if (!Array.isArray(el)) {
            el.remove();
        } else {
            this.el.forEach(el => el.remove())
        }
        return this
    }

    static _isNode(el) {
        return el && (el.nodeType === 1 || el.nodeType == 11);
    }
}
