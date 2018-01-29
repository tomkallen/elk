import {mix} from './mixer';
import {css} from './css';
import {visibility} from './visibility';
import {manipulation} from './manipulation';

class Helm__PROTO {}

class Helm extends mix(Helm__PROTO).with (css, manipulation, visibility) {
    constructor(el) {
        super();
        this.el = Array.from(document.querySelectorAll(el));
    }

    html(val, el) {
        if (val) {
            this._getNodeList(el).forEach((e) => e.innerHTML = val);
            return this;
        } else {
            return this._getNodeList(el).map((e) => e.innerHTML);
        }
    }

    text(val) {
        if (val) {
            this.el.forEach((e) => e.textContent = val);
            return this;
        } else {
            return this.el.map((e) => e.textContent);
        }
    }

    on(event, cb) {
        return this.el.forEach((e) => e.addEventListener(event, () => cb(this))),
        this;
    }

    wait(time, cb) {
        // firing callback with this instead of event to support 'inner chaining'
        // i.e.: h("mydiv").wait(1000, el => el.kill("otherdiv")).hide();
        return setTimeout(() => cb(this), time),
        this;
    }

    _isNode(el) {
        return el && (el.nodeType === 1 || el.nodeType === 11);
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
}

export default function h(el = "body") {
    return new Helm(el);
}

h.plugin = Helm.prototype;
