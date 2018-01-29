export const visibility = (superclass) => class extends superclass {

    hide(el) {
        this._getNodeList(el).forEach((e) => {
            if (!e.getAttribute("elk-oldVis")) {
                const style = (
                    window.getComputedStyle
                    ? getComputedStyle(e, null)
                    : e.currentStyle).display;
                e.setAttribute("elk-oldVis", style);
                e.style.display = 'none';
            }
        });

        return this;
    }

    show(el) {
        this._getNodeList(el).forEach((e) => {
            e.style.display = e.getAttribute("elk-oldVisibilty") || "block";
        });

        return this;
    }

    toggle(el) {
        const list = this._getNodeList(el);
        const attr = "elk-vis";

        list.forEach((e) => {
            const style = (
                window.getComputedStyle
                ? getComputedStyle(e, null)
                : e.currentStyle).display;
            if (style === 'none') {
                e.style.display = e.getAttribute(attr) || "block";
            } else {
                if (!e.getAttribute(attr)) {
                    const style = (
                        window.getComputedStyle
                        ? getComputedStyle(e, null)
                        : e.currentStyle).display;
                    e.setAttribute(attr, style);
                    e.style.display = 'none';
                }
            }
        });

        return this;
    }

    kill(el) {
        this._getNodeList(el).forEach((el) => el.remove());

        return this;
    }
}
