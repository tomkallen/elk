export const attributes = (superclass) => class extends superclass {
    attr(arg, el) {
        if (typeof arg === "string") {
            const filteredElements = this._getNodeList(el).filter((e) => e.getAttribute(arg));
            return h(filteredElements);
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
