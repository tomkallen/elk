## HTML within an element  

## Core
### .html([*value*], [*selector*])    
setter - *chainable*

Sets or gets inner HTML of selected elements.

---
### .text([[*value*], [*selector*])
setter - *chainable*

Sets or gets text of selected elements.

---
## Styling
### .hasClass([*className*], [*selector*])

Returns `true` if *any* selected element has *className*  
If *className* is omitted then returns `true` if  *any* selected element has *at least one* class.

---
### .setClass(className, [*selector*])
*chainable*  

Sets *className* as the *only* class for the elements. All other classes are removed.

---
### .addClass(className, [*selector*])
*chainable*  

Adds _className_ to the elements.

---
### .removeClass([*className*], [*selector*])
*chainable*  

Removes *className* from elements.  
If *className* is not passed then all classes are removed form the selected elements.

---
### .getClass([*selector*])

Returns an array of classes that exist on selected elements.
