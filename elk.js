function h(el = "body") {
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
            return this.el.map(e => e.innerHTML);
        }
    }

    text(val) {
        if (val) {
            this.el.forEach(e => e.textContent = val)
            return this;
        } else {
            return this.el.map(e => e.textContent);
        }
    }

    on(event, cb) {
        return this.el.forEach(el => el.addEventListener(event, () => cb(this))),
        this;
    }

    hasClass(cl) {
        return cl
            ? Boolean(this.el.filter(el => el.classList.contains(el)).length)
            : Boolean(this.el.filter(el => el.className).length);
    }

    setClass(cl) {
        cl && this.el.forEach(el => el.className = cl);
        return this;
    }

    toggleClass(cl) {
        return this.el.forEach(el => el.classList.toggle(cl)),
        this;
    }

    getClass(el) {
        const list = DOM._getNodeList(el);
        return list.map(el => el.className);
    }

    wait(time, cb) {
        // firing callback with this instead of event to support 'inner chaining'
        // i.e.: h("mydiv").wait(1000, el => el.kill("otherdiv")).hide();
        return setTimeout(() => cb(this), time),
        this;
    }

    hide(el) {
        const list = DOM._getNodeList(el);
        list.forEach(e => {
            if (!e.getAttribute("elk-oldVis")) {
                const style = (
                    window.getComputedStyle
                    ? getComputedStyle(e, null)
                    : e.currentStyle).display;
                e.setAttribute("elk-oldVis", style);
                e.style.display = 'none';
            }
        })
    }

    show(el) {
        const list = DOM._getNodeList(el);
        list.forEach(e => {
            e.style.display = e.getAttribute("elk-oldVisibilty") || "block";
        });

        return this;
    }

    toggle(el) {
        const list = DOM._getNodeList(el);
        list.forEach(e => {
            const style = (
                window.getComputedStyle
                ? getComputedStyle(e, null)
                : e.currentStyle).display;
            if (style == 'none') {
                e.style.display = e.getAttribute("elk-oldVisibilty") || "block";
            } else {
                if (!e.getAttribute("elk-oldVisibilty")) {
                    const style = (
                        window.getComputedStyle
                        ? getComputedStyle(e, null)
                        : e.currentStyle).display;
                    e.setAttribute("elk-oldVisibilty", style);
                    e.style.display = 'none';
                }
            };
        })
        return this;
    }

    addClass(cl) {
        return this.el.forEach(el => el.classList.add(cl)),
        this;
    }

    removeClass(cl) {
        if (cl) {
            this.el.forEach(el => el.classList.remove(cl))
        } else {
            this.el.forEach(el => el.className = "")
        }
        return this;
    }

    kill(el) {
        const list = this._getNodeList(el);
        list.forEach(el => el.remove());
        return this;
    }

    _isNode(el) {
        return el && (el.nodeType === 1 || el.nodeType == 11);
    }

    _getNodeList(args){
        // if elk instance is passed as an argument then return its elements
        if (args instanceof DOM) {
            return args.el;
        }
        // otherwise query select nodes
        if (typeof args === "string" && args.length) {
            return Array.from(document.querySelectorAll(args));
        }
        // or return self elements if no argument is provided
        console.log(this.el)
        return this.el;
    }
}
