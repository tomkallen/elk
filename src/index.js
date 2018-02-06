import {
    mix
} from './mixer';
import {
    css,
    manipulation,
    visibility
} from './modules';

class Helm__PROTO {}

class Helm extends mix(Helm__PROTO).with(css, manipulation, visibility) {
    constructor(selector) {
        super();
        this.selector = selector;
        if (Helm._isTag(selector)) {
            this.el = Helm._createNewElement(selector)
        } else {
            this.el = Array.from(document.querySelectorAll(selector));
        }
    }

    static _createNewElement(selector) {
        const tag = selector.slice(1, selector.length - 1);        
        return [document.createElement(tag)];
    }

    html(val, el) {
        if (val) {
            this._getNodeList(el).forEach((e) => e.innerHTML = val);
            return this;
        } else {
            return this._getNodeList(el).map((e) => e.innerHTML);
        }
    }

    text(val, el) {
        if (val) {
            this._getNodeList(el).forEach((e) => e.textContent = val);
            return this;
        } else {
            return this._getNodeList(el).map((e) => e.textContent);
        }
    }

    on(event, callback) {
        return this.el.forEach((e) => e.addEventListener(event, () => callback(this))),
            this;
    }

    wait(time, callback) {
        // firing callback with this instead of event to support 'inner chaining'
        // i.e.: h("mydiv").wait(1000, el => el.kill("otherdiv")).hide();
        return setTimeout(() => callback(this), time),
            this;
    }

    static _isNode(el) {
        return el && (el.nodeType === 1 || el.nodeType === 11);
    }

    static _isTag(selector) {
        return /<*?[A-Za-z]>/.test(selector)
    }

    _getNodeList(args) {
        // if Helm instance is passed as an argument then return its elements
        if (args instanceof Helm) {
            return args.el;
        }
        // otherwise query select nodes
        if (typeof args === "string" && args.length) {
            return Array.from(document.querySelectorAll(args));
        }
        // or return self elements if no argument is provided
        return this.el;
    }

    shake() {
        this.el = Array.from(document.querySelectorAll(this.selector));
    }
}

export default function h(selector = "body") {
    return new Helm(selector);
}

h.plugin = Helm.prototype;
