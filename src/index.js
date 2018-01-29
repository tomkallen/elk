import {mix} from './mixer';
import {css} from './css';
import {visibility} from './visibility';

class DOM__PROTO {};

class DOM extends mix(DOM__PROTO).with (css, visibility) {
    constructor(el) {
        super();
        this.el = Array.from(document.querySelectorAll(el));
    }

    html(val, el) {
        if (val) {
            this._getNodeList(el).forEach(e => e.innerHTML = val)
            return this;
        } else {
            return this._getNodeList(el).map(e => e.innerHTML);
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
        // if elk instance is passed as an argument then return its elements
        if (args instanceof DOM) {
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
    return new DOM(el);
}
