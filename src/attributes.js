export const attributes = (superclass) => class extends superclass {
    attr(arg, el) {
        if (typeof arg === "string") {
            return this._getNodeList(el).map((e) => e.getAttribute(arg));
        }

        if (typeof arg === "object") {
            this._getNodeList(el).forEach((el) => {
                Object.keys(arg).forEach((attr) => {
                    if (!arg[attr]) {
                        el.removeAttribute(attr);
                    } else {
                        el.setAttribute(attr, arg[attr]);
                    }
                })
            });
        }
        return this;
    }
}
