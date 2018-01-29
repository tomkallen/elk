export const manipulation = (superclass) => class extends superclass {

    swap(elA, elB) {

        if (arguments.length === 2) {
            // if 2 arguments are passed then swap those
            elA = this._getNodeList(elA)[0];
            elB = this._getNodeList(elB)[0];
        } else if (arguments.length === 1) {
            // else swap 'this' with the one provided as an argument
            elB = this._getNodeList(elA)[0];
            elA = this.el[0];
        } else {
            return this
        }

        const temp = document.createTextNode("");
        // create temporary node to mark the position of the element  A
        elA.parentNode.insertBefore(temp, elA);
        elB.parentNode.insertBefore(elA, elB);
        temp.parentNode.insertBefore(elB, temp);

        temp.remove();

        return this;
    }

}
