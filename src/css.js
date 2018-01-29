export const css = (superclass) => class extends superclass {

    hasClass(cl, el) {
        super.hasClass && super.hasClass();
        if (cl instanceof DOM) {
            // parameters shift in case when only an element is passed
            el = cl;
            cl = null;
        }
        return cl
            ? Boolean(this._getNodeList(el).filter((e) => e.classList.contains(cl)).length)
            : Boolean(this._getNodeList(el).filter((e) => e.className).length);
    }

    setClass(cl, el) {
        super.setClass && super.setClass();
        cl && this._getNodeList(el).forEach((e) => e.className = cl);
        return this;
    }

    toggleClass(cl, el) {
        super.toggleClass && super.toggleClass();
        return this._getNodeList(el).forEach((e) => e.classList.toggle(cl)),
        this;
    }

    getClass(el) {
        super.getClass && super.getClass();
        const list = this._getNodeList(el);
        return list.map((e) => e.className);
    }

    addClass(cl, el) {
        super.addClass && super.addClass();
        return this._getNodeList(el).forEach((e) => e.classList.add(cl)),
        this;
    }

    removeClass(cl, el) {
        super.removeClass && super.removeClass();
        if (cl) {
            this._getNodeList(el).forEach((e) => e.classList.remove(cl))
        } else {
            this._getNodeList(el).forEach((e) => e.className = "")
        }
        return this;
    }
};
