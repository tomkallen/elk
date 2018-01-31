export const css = (superclass) => class extends superclass {

    hasClass(cl, el) {
        if (cl instanceof superclass) {
            // parameters shift in case when only an element is passed
            el = cl;
            cl = null;
        }
        return cl ?
            Boolean(this._getNodeList(el).filter((e) => e.classList.contains(cl)).length) :
            Boolean(this._getNodeList(el).filter((e) => e.className).length);
    }

    setClass(cl, el) {
        cl && this._getNodeList(el).forEach((e) => e.className = cl);
        return this;
    }

    toggleClass(cl, el) {
        return this._getNodeList(el).forEach((e) => e.classList.toggle(cl)),
            this;
    }

    getClass(el) {
        const list = this._getNodeList(el);
        return [].concat(list.map((e) => e.className.split(" "))).filter((c, i, arr) => {
            arr.indexOf(c) === i
        });

    }

    addClass(cl, el) {
        return this._getNodeList(el).forEach((e) => e.classList.add(cl)),
            this;
    }

    removeClass(cl, el) {
        if (cl) {
            this._getNodeList(el).forEach((e) => e.classList.remove(cl))
        } else {
            this._getNodeList(el).forEach((e) => e.className = "")
        }
        return this;
    }
};
